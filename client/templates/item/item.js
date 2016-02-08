/**
 * Created by Neal Li on 2016/2/5.
 */
'use strict'

Template.item.events({
    'click .input-group-addon': function (evt, temp) {
        evt.preventDefault();
        var $target = $(evt.currentTarget),
            count = $target.prev().val() || 0,
            price = $target.prev().prev().val();

        if (!count) {
            return;
        }

        Modal.show('modal', {
            itemId: this._id,
            item: this.itemName,
            title: '计算结果',
            count: count,
            price: price,
            result: (count * price).toFixed(2)
        });
    }
});