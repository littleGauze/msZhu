/**
 * Created by Administrator on 2015/9/8.
 */
Template.tops.helpers({
});
Template.tops.events({
    'keyup #search': _.throttle(function (evt, temp) {
        var text = evt.currentTarget.value;
        if (text) {
            ClientState.searchText(text);
        } else {
            ClientState.searchText({});
        }
    }, 300)
});
Template.tops.onRendered(function () {
});
