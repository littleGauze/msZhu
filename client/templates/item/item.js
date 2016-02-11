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
            count: parseFloat(count),
            price: parseFloat(price),
            result: parseFloat((count * price).toFixed(2)),
            createdAt: new Date()
        });

        $target.prev().val('');
    },
    'click a.edit': function (evt, temp) {
        evt.preventDefault();
        var id = $(evt.currentTarget).attr('data-id');
        if (id) {
            Router.go('add', {}, {query: 'id=' + id});
        }
    },
    'click a.delete': function (evt, temp) {
        evt.preventDefault();
        var id = $(evt.currentTarget).attr('data-id');
        if (id && confirm('您确定要删除该商品吗？')) {
            Images.remove({_id: id});
        }
    }
});