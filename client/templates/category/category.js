/**
 * Created by Neal Li on 2016/2/6.
 */
'use strict'

var baseIp = Meteor.settings.public.baseIp,
    rootUrl = 'http://' + baseIp + ':3000';

Template.category.helpers({
    categorys: function () {
        return [{
            url: Meteor.absoluteUrl('', {
                rootUrl: rootUrl
            }) + '/vegetable.jpg',
            name: 'vegetable',
            label: '蔬菜'
        }, {
            url: Meteor.absoluteUrl('', {
                rootUrl: rootUrl
            }) + '/fruit.jpg',
            name: 'fruit',
            label: '水果'
        }, {
            url: Meteor.absoluteUrl('', {
                rootUrl: rootUrl
            }) + '/drinks.jpg',
            name: 'drinks',
            label: '酒水'
        }, {
            url: Meteor.absoluteUrl('', {
                rootUrl: rootUrl
            }) + '/others.jpg',
            name: "others",
            label: '百货'
        }];
    }
});

Template.category.events({
    'click .thumbnail': function (evt, temp) {
        evt.preventDefault();
        var type = evt.currentTarget.id;
        Router.go('categoryList', {type: type});
    }
});
