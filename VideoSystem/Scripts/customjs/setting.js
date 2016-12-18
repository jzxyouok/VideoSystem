function modify() {
    var password = jQuery("#password");
    var newPass = jQuery("#newPass");
    var passConfirm = jQuery("#passConfirm");

    if (newPass.val().length <= 0 || passConfirm.val().length <= 0) {
        alert("请填写新密码和确认密码");
        return;
    }
    if (newPass.val() != passConfirm.val()) {
        alert("两次密码填写不一致，请重新填写");
        return;
    }

    var oldPassMD5 = $.md5(password.val()).toLocaleUpperCase();
    var newPassMD5 = $.md5(newPass.val()).toLocaleUpperCase();
    var PassConfirmMD5 = $.md5(passConfirm.val()).toLocaleUpperCase();

    password.val(oldPassMD5);
    newPass.val(newPassMD5);
    passConfirm.val(PassConfirmMD5);

    jQuery("#modifyPassForm").submit();
}