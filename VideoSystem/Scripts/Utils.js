﻿function checkEmail() {
    var email = jQuery("#email");
    var re = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (!re.test(email.val()))
    {
        alert("请输入有效的邮箱！");
        email.focus();
        return;
    }
}

function checkPhone() {
    var phone = jQuery("#phone");
    if (!(/^1(3|4|5|7|8)\d{9}$/.test(phone.val()))) {
        alert("请输入正确的手机号！");
        phone.focus();
        return;
    }
}


/*
    检查验证码是否正确
*/
function verifyCode() {
    var code = jQuery("#code");
    if (code.val().length <= 0) {
        alert("验证码不能为空!");
        code.focus();
        return;
    }

    jQuery.post(
        "/VerifyCode/CheckVerifyCode",
        { "verifycode": code.val() },
        function (data, statusText, xhr) {
            if (data == 2) {
                alert("验证码不正确，请重新输入!");
                code.val("");
                code.focus();
                return;
            }
        },
        "text"
     );
}

/*
    刷新验证码
*/
function refreshCode() {
    var codeImg = jQuery("#codeImg");
    var time = new Date().getSeconds();
    var url = "/VerifyCode?time=" + time;
    codeImg.attr("src", url);
}