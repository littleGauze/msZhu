/**
 * Created by Neal Li on 2016/2/5.
 */
'use strict'

Template.home.onCreated(function () {
});

Template.home.helpers({
    items: function () {
        return Images.find(ClientState.searchText());
    }
});

Template.home.events({
});
