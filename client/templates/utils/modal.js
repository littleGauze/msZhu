/**
 * Created by Neal Li on 2016/2/8.
 */
'use strict'
Template.modal.helpers({
    title: function () {
        return this.title || '';
    },
    count: function () {
        return this.count || 0;
    },
    price: function () {
        return this.price || 0;
    },
    result: function () {
        return this.result || 0;
    }
});

Template.modal.events({
    'click .btn': function (evt, temp) {
        evt.preventDefault();
        Orders.insert(temp.data);
    }
})