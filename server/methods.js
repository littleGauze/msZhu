/**
 * Created by Neal Li on 2016/2/5.
 */
'use strict'
Meteor.startup(function () {
    UploadServer.init({
        tmpDir: '/.uploads/tmp',
        uploadDir: '/.uploads/',
        checkCreateDirectories: true,
        crop: true,
        overwrite: true,
        imageVersions: {
            thumbnailBig: {width: 400, height: 400}
        },
        finished: function(fileInfo, formFields) {
            //var id = Images.insert(fileInfo);
            //fileInfo._id = id;
            //fileInfo.extraData = '32141243';
            //return fileInfo;
        },
    });
});

Meteor.methods({
    statistics: function () {
        var result = Orders.aggregate({
            $group: {
                _id: { month: { $month: '$createdAt'}},
                result: {
                    $sum: '$result'
                }
            }
        });
        return result;
    },
    clearStat: function () {
        return Orders.remove({});
    }
});