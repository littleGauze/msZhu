/**
 * Created by Neal Li on 2015/9/22.
 */
ClientState = (function () {
    var my = {},
        searchText = new ReactiveVar({}),
        currentLoc = new ReactiveVar('home');

    my.searchText = function (text) {
        if (text) {
            var query = {};
            if (!_.isEmpty(text)) {
                query = {itemName: new RegExp(text, 'i')};
            }
            searchText.set(query);
            return '';
        }
        return searchText.get();
    };

    my.currentLocation = function (loc) {
        if (loc) {
            currentLoc.set(loc);
            return '';
        }
        return currentLoc.get();
    };

    return my;
}());