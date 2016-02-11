/**
 * Created by Neal Li on 2016/2/5.
 */
'use strict'

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.route('/', function () {
    this.render('tops', {to: 'aside'});
    this.render('home');
    this.render('footers', {to: 'footer'});
});

Router.route('/home', function () {
    this.redirect('/');
});

Router.route('/add', function () {
    this.render('add', {
        name: 'add',
        data: function () {
            return this.params.query || {};
        }
    });
});

Router.route('/category', function () {
    this.render('category');
    this.render('footers', {to: 'footer'});
});

Router.route('/categoryList/:type', function () {
    this.render('categoryList', {
        data: this.params
    });
    this.render('footers', {to: 'footer'});
}, {
    name: 'categoryList'
});

Router.route('/statistics', function () {
    this.render('statistics');
    this.render('footers', {to: 'footer'});
});

Router.route('/about', function () {
    this.render('about');
    this.render('footers', {to: 'footer'});
});
