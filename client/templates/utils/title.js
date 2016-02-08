/**
 * Created by Neal Li on 2016/2/8.
 */
'use strict'

Template.title.helpers({
    text: function () {
        return (Template.instance().data || {}).text || '';
    }
});