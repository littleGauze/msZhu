/**
 * Created by Neal Li on 2016/2/8.
 */
'use strict'

Template.categoryList.helpers({
    itemLists: function () {
        return Images.find({
            category: this.type
        });
    }
});