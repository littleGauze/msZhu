/**
 * Created by Neal Li on 2016/2/8.
 */
'use strict'

var stat;

Template.statistics.onCreated(function () {
    stat = new ReactiveVar([]);

    //获取统计信息
    Meteor.call('statistics', function (err, res) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(res);
        stat.set(res.map(function (doc) {
            return {
                month: doc._id.month,
                result: doc.result
            };
        }));
    });

});

Template.statistics.helpers({
    statistics: function () {

        return stat.get();
    }
});
