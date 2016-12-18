jQuery(document).ready(function () {
    //默认设置
    var fp1 = new Fingerprint();
    //canvas设置
    var fp2 = new Fingerprint({ canvas: true });
    //插件设置
    var fp3 = new Fingerprint({ ie_activex: true });
    //屏幕设置
    var fp4 = new Fingerprint({ screen_resolution: true });

    var str = "" + fp1.get() + fp2.get() + fp3.get() + fp4.get();

    jQuery("#userLoginForm").append("<input type='hidden' name='UserBrowser' value='" + $.md5(str) + "'/>");
});

function login() {
    var password = jQuery("#password").val();
    strmd5 = $.md5(password).toLocaleUpperCase();
    jQuery("#password").val(strmd5);
    jQuery("#userLoginForm").submit();
}