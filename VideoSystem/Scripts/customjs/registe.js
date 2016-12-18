var pass = jQuery("#UserPassword");
var confirmPass = jQuery("#UserConfirmPassword");
var accountElement = jQuery("#UserAccount");
var verifycode = jQuery("#verifycode");

/*
   检查账号是否存在
*/
function isAccountExist() {
    if (accountElement.val().length <= 0) {
        alert("账号不能为空!");
        accountElement.focus();
        return;
    }

    jQuery.post(
        "/Login/IsRegistAccountExist",
{ "account": accountElement.val() },
function (data, statusText, xhr) {
    if (data == "erro") {
        alert("此账号已存在，请重新输入!");
        accountElement.val("");
        accountElement.focus();
        return;
    }
},
            "text"
        );
}

/*
   检查密码长度
*/
function passLenth() {
    if (pass.val().length <= 0) {
        alert("密码不能为空！");
        pass.focus();
        return;
    }
    if (pass.val().length < 8) {
        alert("密码长度不能小于8位！");
        pass.focus();
        return;
    }
}

/*
    检查密码是否一致
*/
function isPassSame() {

    if (pass.val().length > 0) {
        if (confirmPass.val() != pass.val()) {
            alert("两次密码不一致，请重新输入!");
            confirmPass.val("");
            confirmPass.focus();
            return;
        }
    }
}

//加密密码
function regist() {
    var password = jQuery("#UserPassword").val();
    var UserConfirmPassword = jQuery("#UserConfirmPassword").val();

    var passMD5 = $.md5(password).toLocaleUpperCase();
    var passConfirmMD5 = $.md5(UserConfirmPassword).toLocaleUpperCase();

    jQuery("#UserPassword").val(passMD5);
    jQuery("#UserConfirmPassword").val(passConfirmMD5);

    jQuery("#registForm").submit();
}