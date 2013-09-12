# OneApi WordPress SendSMS plugin

SendSMS plugin is an simple WordPress plugin to send SMS messages from within your WordPress - powered website.

## Install
To install OneSendSMS plugin you must have an functional and working WordPress website. Go to and find /your\_website\_root/wp_content/plugins directory. Under this tree, create a new directory named 'sendsms'. The created directory should be now in your WordPress plugins path: /your\_website\_root/wp\_content/plugins/sendsms, copy all the files found in the /src repository directory to the sendsms plugin directory. Please retain the plugin sub-directory structure.

## Activate
Login to Your WordPress administration zone, find the plugins administration page, there should be 'OneApi sendSMS' plugin on the plugins list. Click on 'Activate' link to make it ready for usage.

## Getting Started
Using the SendSMS plugin is really simple. Edit your desidered WordPress page, then on the wanted position just type the call in the standard WordPress tag notation with angular brackets:

```php
	<div class="my_sms_box">
    	[sendsms auth_username='your_username' auth_password='your_password' sender_address='some_number' message='your_message']
	</div>
```

For detailed list of all supported arguments please explore the wpOneApiSendSMS.php plugin source code file.

## Notes

SendSMS plugin was tested with WordPress version 3.6
