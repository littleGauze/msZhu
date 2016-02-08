/**
 * Created by Neal Li on 2016/2/5.
 */
'use strict'

Meteor.startup(function () {
    UploadServer.init({
        tmpDir: '/.uploads/tmp',
        uploadDir: '/.uploads/',
        checkCreateDirectories: true,
        finished: function(fileInfo, formFields) {
            //var id = Images.insert(fileInfo);
            //fileInfo._id = id;
            //fileInfo.extraData = '32141243';
            //return fileInfo;
        },
    });
});