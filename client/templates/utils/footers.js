/**
 * Created by Neal Li on 2015/9/9.
 */
Template.footers.helpers({
    isActive: function (loc) {
        return loc === ClientState.currentLocation() ? 'active' : '';
    }
});
Template.footers.onRendered(function () {
});
Template.footers.events({
    "click .bottom-div": function (event) {
        var loc = event.currentTarget.id;
        ClientState.currentLocation(loc);
        Router.go("/" + loc);
    }
});