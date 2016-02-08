/**
 * Created by Administrator on 2015/9/7.
 */
Meteor.startup(function () {
    //上传插件的配置
    Uploader.uploadUrl = Meteor.absoluteUrl("upload"); // Cordova needs absolute URL

    //Uploader.uploadUrl = 'http://192.168.1.116:3000';

    Uploader.localisation = {
        browse: "浏览",
        cancelled: "已取消",
        remove: "移除",
        upload: "上传",
        done: "完成",
        cancel: "取消"
    }

    // alert配置
    sAlert.config({
        effect: 'jelly',
        position: 'top',
        offset: '10px',
        timeout: 2000,
        html: true,
        onRouteClose: true,
        stack: true,
        beep: false
    });

});