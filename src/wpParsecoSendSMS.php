<?php
/*
Plugin Name: Parseco sendSMS
Plugin URI: http://www.parseco.com/plugins/wp
Description: Sent SMS
Version: 1.0
Author: Roberto Belušić, 
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
?><?php
    function cb_parseco_send_sms_menu() {
        if (!current_user_can( 'manage_options'))  {
            wp_die(__( 'You do not have sufficient permissions to access this page.' ));
	}
	echo '<div class="wrap">';
	echo '<p>Options</p>';
	echo '</div>';
    }
    
    function parseco_send_sms_menu() {
        add_options_page( 'Parseco sendSMS', 'Authentication', 'manage_options', 'parseco_send_sms', 'b_parseco_send_sms_menu' );
    }
    
    function parseco_send_sms_init() {
        $defcss = plugins_url( 'css/default.css', __FILE__ );
        wp_register_script(
            'parseco-js', 
            'http://www.parseco.com/api/parseco.js'
        );
        wp_enqueue_script('parseco-js');  
        
        wp_register_style(
            'parseco-css',                 
            'http://www.parseco.com/api/parseco.css'
        );
        wp_enqueue_style('parseco-css');  
        
        wp_register_style(
            'plugin-css',                 
            $defcss
        );
        wp_enqueue_style('plugin-css');  
        
    }
    
    function parseco_send_sms($atts,$content=null) {
        extract(shortcode_atts(
            array(
                'description' => 'Mobile Number',
                'done_message' => 'Done.',
                'auth_error_message' => 'Error',
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

        $template = <<<EOF

<div class="fmmlPluginContainer">
    <div style="display: none;" 
         data-fmml-host="UserLoginData" 
         data-fmml-username='$auth_username' 
         data-fmml-password='$auth_password' 
         data-fmml-run-on-success="parseco-plugin-content" 
         data-fmml-login-on-run="true"
         ></div>
    <div data-fmml-host="CustomerProfile">
        <div style="display: none;" data-fmml-observer="Display" data-fmml-attr-value-hidden="gsm">
            <p>$auth_error_message</p>
        </div>    
        <div style="display: none;" data-fmml-observer="Display" data-fmml-attr-value-visible="gsm">
            <div data-fmml-host="SMSMessage">
                <form>                
                    <ul class="clearfix">
                        <li>
                            <input id="sendtoaddress" 
                                   class="fmmlNumberInput" type="text" 
                                   data-fmml-observer="Attribute" 
                                   data-fmml-attr-name="address"  
                                   data-fmml-extensions="MlExAttributeEdit"
                                   data-fmml-attr-default-value=""                    
                                   />
                        </li>
                        <li>
                            <input class="fmmlSendButton" type="submit" 
                                   value="Send SMS" 
                                   data-fmml-observer="Event" 
                                   data-fmml-event-async="true" 
                                   data-fmml-event-type="onSendSMS" 
                                   data-fmml-run-on-success="send-sms-query-ds"                        
                                   />
                        </li>
                    </ul>            
                    <div style="display: none;">

                        <dl>
                            <dt style="display: $showMessage;" class="fmmlValueAnnotation mbottom10">Message:</dt>
                            <dd style="display: $showMessage;">
                                <textarea class="fmmlValueInput" rows="3" cols="48" 
                                          data-fmml-observer="Attribute" 
                                          data-fmml-attr-name="message" 
                                          data-fmml-extensions="$messageExtensions" 
                                          data-fmml-attr-default-value="$message"
                                          ></textarea>
                            </dd>
                        </dl>                

                        <input class="fmmlValueInput" type="text" disabled="disabled" 
                               data-fmml-observer="Attribute" 
                               data-fmml-attr-name="senderAddress" 
                               data-fmml-attr-default-value="$sender_address" 
                               />
                        <input class="fmmlValueInput" type="text" disabled="disabled" 
                               data-fmml-observer="Attribute" 
                               data-fmml-attr-name="senderName" 
                               data-fmml-attr-default-value="$sender_name" 
                               />
                    </div>                
                </form>            
            </div>

            <div class="fmmlStatus" style="display: $showDeliveryStatus;" id="send-sms-query-ds" 
                data-fmml-host="QuerySMSDeliveryStatus" data-fmml-run-on-init="false" 
                data-fmml-interval="0"
                data-fmml-info-message="$done_message"
            >
                <div class="fmmlStatus" data-fmml-observer="Attribute" 
                data-fmml-attr-name="deliveryStatus"></div>
            </div>
        </div>
    </div>

</div>
<script>
        // watermsrk
        $("#sendtoaddress").watermark("$description");

	// Set proxy script URL
	OA.setProxy("$proxyFile");

	// Call init method
	if(oneapi.init()) {
		// Init sucessfull
		oneapi.mlInit();
	}
</script>
EOF;

            
        return $template;        
    }
    
    
    add_action( 'admin_menu', 'parseco_send_sms_menu' );
    
    parseco_send_sms_init();
    add_shortcode( 'sendsms', 'parseco_send_sms');
    
    
?>