<?php

$template = <<<EOF

<div class="fmmlPluginContainer">
    <div id="parseco-plugin-content" data-fmml-host="CustomerProfile">
        <div style="display: none;" data-fmml-observer="Display" data-fmml-attr-value-hidden="@this.D.getAttr('key','new') != 'new'">
            <p>$auth_error_message</p>
        </div>    
        <div style="display: none;" data-fmml-observer="Display" data-fmml-attr-value-visible="@this.D.getAttr('key','new') != 'new'">
            <div data-fmml-host="SMSMessage">
                <form>                
                    <ul class="clearfix">
                        <li>
                            <input id="sendtoaddress" 
                                   class="fmmlNumberInput" type="text" 
                                   placeholder="GSM number"
                                   data-fmml-observer="Attribute" 
                                   data-fmml-attr-name="address"  
                                   data-fmml-extensions="MlAttributeEdit"
                                   data-fmml-attr-default-value=""                    
                                   />
                        </li>
                        <li>
                            <input class="fmmlSendButton" type="submit" 
                                   value="Send SMS" 
                                   data-fmml-observer="Event" 
                                   data-fmml-event-async="true" 
                                   data-fmml-event-type="onSendSMS" 
                                   data-fmml-run-on-success="hst-sms-err"                      
                                   data-fmml-run-on-error="hst-sms-err"                      
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

            <div id="hst-sms-err" data-fmml-host="ApiErrors" data-fmml-run-on-init="false">
                <div style="display: none;" class="fmmlStatus"
                     data-fmml-observer="Display" 
                    data-fmml-attr-value-visible="@this.D!=null && this.D.getSubClassName()=='GenericError' && this.D.getAttr('messageId','0') != '0'"
                     >
                    $error_message
                </div>
                <div style="display: none;" class="fmmlStatus"
                     data-fmml-observer="Display" 
                     data-fmml-attr-value-visible="@this.D!=null && this.D.getSubClassName()!='GenericError'"
                     >
                    $done_message
                </div>
            </div>

        </div>
    </div>

</div>
<script>
    var app = ib.AppSendSmsWpPlugin.startApp({
        ibsso: "$ibsso"
        });
    if(app) app.mlInit();
</script>
EOF;

?>