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
/*  Copyright YEAR  PLUGIN_AUTHOR_NAME  (email : PLUGIN AUTHOR EMAIL)

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
    // admin options page - plugin settings
    function cb_oneapi_send_sms_menu() {
        if (!current_user_can( 'manage_options'))  {
            wp_die(__( 'You do not have sufficient permissions to access this page.' ));
        }

        echo '<div class="wrap">';
        echo '<p>OneApi SendSMS - Options</p>';
        echo '</div>';
    }
    
    // admin options page init
    function oneapi_send_sms_menu() {
        add_options_page( 'OneApi sendSMS', 'SMS Authentication', 'manage_options', 'oneapi_send_sms', 'cb_oneapi_send_sms_menu' );
    }
    
    // init plugin
    function oneapi_send_sms_init() {
        $parseco_js = plugins_url( 'js/parseco.js', __FILE__ );
        wp_register_script('parseco-js', $parseco_js);
        wp_enqueue_script('parseco-js');  
               
        $plugin_css = plugins_url( 'css/default.css', __FILE__ );
        wp_register_style('plugin-css', $plugin_css);
        wp_enqueue_style('plugin-css');
    }
    
    // main plugin method to send sms
    function oneapi_send_sms($atts, $content = null) {
        extract(shortcode_atts(
            array(
                'description' => 'Mobile Number',
                'done_message' => 'Done.',
                'auth_error_message' => 'Authenticating ...',
                'message_visible' => '1',
                'message_editable' => '1',
                'delivery_status_visible' => '1',
                'auth_username' => '',
                'auth_password' => '',
                'sender_address' => '',
                'sender_name' => '',
                'address' => '',
                'message' => ''                
            ), 
            $atts
        ));

        $showMessage = $message_visible == '0' ? 'none' : 'block';
        $messageExtensions = $message_editable == '0' ? '' : 'MlExAttributeEdit';
        $showDeliveryStatus = $delivery_status_visible ==  '0' ? 'none' : 'block';
        $proxyFile = plugins_url( 'proxy/cdproxy.php', __FILE__ );

        $template = '<div class="error">Error inlcuding sendSMS form, please check your plugin configuration.</div>';
        $sendSMSForm = plugin_dir_path(__FILE__).'includes/sendSMSForm.php';
        if(file_exists($sendSMSForm))
           require($sendSMSForm);

        return $template;        
    }
    
    
    add_action( 'admin_menu', 'oneapi_send_sms_menu' );
    
    oneapi_send_sms_init();

    add_shortcode( 'sendsms', 'oneapi_send_sms');
?>