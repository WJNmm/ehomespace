define(['jquery'], function ($) {
    //实现登录功能
    $('#login').click(function () {
        var formdata = $('#loginForm').serialize();
//        console.log(formdata);//tc_name=admin&tc_pass=123456
        $.ajax({
            type: 'post',
            url: '/api/login',
//            data: $('#loginForm').serialize(),
            data: formdata,
            dataType: 'json',
            success: function (data) {
                if (data.code == 200) {
                    //登陆成功，跳转到主页面
                    if (data.code == 200) {
                        // 先保存cookie
                        $.cookie('loginInfo',JSON.stringify(data.result),{path : '/'});
                        //登录成功，跳转到主页面
                        location.href = '/main/index'
                    } else {
                        alert('用户名或者密码错误');
                    }
                }
            }
        });

        return false;
    });
});