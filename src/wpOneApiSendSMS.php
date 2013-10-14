<?php

/*
  Plugin Name: OneApi sendSMS
  Plugin URI: http://github.com/infobip/oneapi-wordpress-sendsms-plugin
  Description: Send SMS from WordPress
  Version: 1.1
  Author: Roberto Belušić
  Author URI:
  License: GPL2
 */
/*  Copyright 2013 Infobip  Ltd. (email : roberto.belusic@gmail.com)

  This program is free software; you can redistribute it and/or modify
  it under the terms of the GNU General Public License, version 2, as
  published by the Free Software Foundation.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program; if not, write to the Free Software
  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 */
?>

<?php

include 'wpOneApiSendSMSoptions.php';

// admin options page - plugin settings
function cb_oneapi_send_sms_menu() {
    if (!current_user_can('manage_options')) {
        wp_die(__('You do not have sufficient permissions to access this page.'));
    }

    echo '<div class="wrap">';
    echo '<p>OneApi SendSMS - Options</p>';
    echo '</div>';
}

// admin options page init
function oneapi_send_sms_menu() {

    //create new top-level menu
    add_menu_page(
            'OneApi sendSMS', 'OneApi sendSMS', 'administrator', __FILE__, 'oneapi_send_sms_options_page'
    );

    //call register settings function
    add_action('admin_init', 'oneapi_send_sms_init_options');
}

function oneapi_send_sms_init_options() {
    register_setting('oneapi_send_sms_options', 'username');
    register_setting('oneapi_send_sms_options', 'password');
}

// init plugin
function oneapi_send_sms_init() {
    $jq_js = plugins_url('js/jquery-1.10.2.min.js', __FILE__);
    wp_register_script('jq_js', $jq_js);
    wp_enqueue_script('jq_js');

    $fm_js = plugins_url('js/fm-js.js', __FILE__);
    wp_register_script('fm-js', $fm_js);
    wp_enqueue_script('fm-js');

    $ib_js = plugins_url('js/infobip-js-client.js', __FILE__);
    wp_register_script('infobip-js-client', $ib_js);
    wp_enqueue_script('infobip-js-client');

    $ib_plg_js = plugins_url('js/infobip-wp-plugin.js', __FILE__);
    wp_register_script('infobip-wp-plugin-js', $ib_plg_js);
    wp_enqueue_script('infobip-wp-plugin-js');

    $plugin_css = plugins_url('css/default.css', __FILE__);
    wp_register_style('plugin-css', $plugin_css);
    wp_enqueue_style('plugin-css');
}

// main plugin method to send sms
function oneapi_send_sms($atts, $content = null) {
    extract(shortcode_atts(
                    array(
                'description' => 'Mobile Number',
                'done_message' => 'Sent.',
                'error_message' => 'SMS send error.',
                'auth_error_message' => 'Authentication error',
                'message_visible' => '1',
                'message_editable' => '1',
                'auth_username' => get_option('username'),
                'auth_password' => get_option('password'),
                'sender_address' => '',
                'sender_name' => '',
                'address' => '',
                'message' => ''
                    ), $atts
            ));

    $showMessage = $message_visible == '0' ? 'none' : 'block';
    $messageExtensions = $message_editable == '0' ? '' : 'MlAttributeEdit';
    $showDeliveryStatus = 'block';
    $proxyFile = plugins_url('proxy/cdproxy.php', __FILE__);
    $ibsso = oneapi_login($auth_username, $auth_password);
    error_log("ibsso: $ibsso");
    $template = '<div class="error">Error inlcuding sendSMS form, please check your plugin configuration.</div>';
    $sendSMSForm = plugin_dir_path(__FILE__) . 'includes/sendSMSForm.php';
    if (file_exists($sendSMSForm))
        require($sendSMSForm);

    return $template;
}

function oneapi_login($auth_username, $auth_password) {
    error_log("login start $auth_username $auth_password");
    $rez = httpSend(
            "https://oneapi.infobip.com/1/customerProfile/login", Array(
        "username" => "$auth_username",
        "password" => "$auth_password",
        "allowChangeIP" => "false"
            ), "JSON", "POST"
    );
    error_log(print_r($rez, true));

    $ce = $rez && is_array($rez) && isset($rez['login']) && isset($rez['login']['ibAuthCookie']);
    $c = $ce ?
            $rez['login']['ibAuthCookie'] : ''
    ;
    error_log("ibAuthCookie: $ce/$c");
    return $c
    ;
}

function httpSend($url, $flds = null, $datatype = "", $mode = "GET", $timeout = 120, $headers = null) {
    $opts = array(
        CURLOPT_FRESH_CONNECT => 1,
        CURLOPT_CONNECTTIMEOUT => 40,
        CURLOPT_TIMEOUT => 120,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_MAXREDIRS => 3,
        CURLOPT_USERAGENT => 'wWw',
        CURLOPT_CUSTOMREQUEST => $mode,
    );
    if ($mode === 'POST' || $mode === 'PUT') {
        if ($flds && sizeof($flds) > 0)
            $opts[CURLOPT_POSTFIELDS] = http_build_query($flds, null, '&');
        $opts[CURLOPT_URL] = $url;
    } else { // GET
        $opts[CURLOPT_URL] = $url . ($flds && sizeof($flds) > 0 ? '?' . http_build_query($flds, null, '&') : '');
    }
    if ($headers !== null && is_array($headers))
        $opts[CURLOPT_HTTPHEADER] = $headers;
    $ch = curl_init();
    curl_setopt_array($ch, $opts);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLINFO_HEADER_OUT, true);

    $result = curl_exec($ch);
    error_log("Result : $result");
    curl_close($ch);

    if ($result != NULL && $datatype == "JSON") {
        $result = preg_replace(
                '/("\w+"):(\d+[\.]{0,1}\d*)/', '\\1:"\\2"', $result
        );
        $result = json_decode($result, TRUE);
    }
    return $result;
}

if ( is_admin() ){ // admin actions
    add_action('admin_menu', 'oneapi_send_sms_menu');
}
    
oneapi_send_sms_init();

add_shortcode('sendsms', 'oneapi_send_sms');
?>