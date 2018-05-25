define(['jquery'], function ($) {
    // 工具函数
    return {
        setMenu: function (path) {// 设置导航菜单选中
            $('.navs a[href="' + path + '"]').addClass('active').closest('ul').show();
        }
    }
});