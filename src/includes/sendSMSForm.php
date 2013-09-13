<?php

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
                    <div style="display: $showMessage;">
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
                    </div>
                    <div style="display: none;">
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

?>