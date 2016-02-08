/**
 * Created by Administrator on 2015/8/31.
 */
Template.goBack.helpers({
    goBackLocation: function () {
        return '';
    },
    text: function () {
        return (Template.instance().data || {}).text || '返回';
    }
});

Template.goBack.events({
    "click .back": function (event) {
        var t = $(event.currentTarget);
        var uri = t.data('uri');
        if(uri) {
            t.data('uri', '');
            Router.go(uri);
        }
        else if(this instanceof String) {
            Router.go(this.toString());
        } else if(this && this.routeNameOrPath) {
            Router.go(this.routeNameOrPath, this.params, this.options);
        } else {
            history.back(); 
        }
    }
});
