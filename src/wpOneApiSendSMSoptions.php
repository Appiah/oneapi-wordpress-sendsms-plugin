<?php
function oneapi_send_sms_options_page() {
?>
<div class="wrap">
    <?php screen_icon(); ?>
    <h2>Infobip OneApi sendSMS WordPress plugin</h2>
    <form method="post" action="options.php">
        <?php settings_fields('oneapi_send_sms_options'); ?>
        <?php do_settings_fields('oneapi_send_sms_options'); ?>
        <table class="form-table">
            <tr valign="top">
                <th scope="row">Username</th>
                <td><input type="text" name="username" value="<?php echo get_option('username'); ?>" /></td>
            </tr>

            <tr valign="top">
                <th scope="row">Password</th>
                <td><input type="text" name="password" value="<?php echo get_option('password'); ?>" /></td>
            </tr>
        </table>

        <?php submit_button(); ?>
    </form>
</div>
<?php
}
?>