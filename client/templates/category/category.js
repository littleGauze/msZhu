/**
 * Created by Neal Li on 2016/2/6.
 */
'use strict'

Template.category.helpers({
    categorys: function () {
        return [{
            url: Meteor.absoluteUrl() + '/vegetable.jpg',
            name: 'vegetable',
            label: '蔬菜'
        }, {
            url: Meteor.absoluteUrl() + '/fruit.jpg',
            name: 'fruit',
            label: '水果'
        }, {
            url: Meteor.absoluteUrl() + '/drinks.jpg',
            name: 'drinks',
            label: '酒水'
        }, {
            url: Meteor.absoluteUrl() + '/others.jpg',
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
