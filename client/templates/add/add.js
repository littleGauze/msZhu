/**
 * Created by Neal Li on 2016/2/5.
 */
'use strict'

var imgSrc,
    currentId,
    baseIp = Meteor.settings.public.baseIp,
    info;

Template.add.onCreated(function () {
    imgSrc = new ReactiveVar('');
    currentId = new ReactiveVar('');
    info = new ReactiveVar({});
    if (this.data.id) {
        info.set(Images.findOne(this.data.id) || {});
        currentId.set(info.get()._id);
    }
});

Template.add.onRendered(function () {
    var category = info.get().category;
    if (category) {
        this.$("select").val(category);
    }
});

Template.add.helpers({
    text: function () {
        return info.get().url ? '编辑商品' : '添加商品';
    },
    info: function () {
        return info.get();
    },
    myCallbacks: {
        formData: function () {
            return {
                id: Random.id(),
                hard: 'Lolcats'
            }
        },
        finished: function (index, fileInfo, context) {
            imgSrc.set(fileInfo.url);
            fileInfo.baseUrl = fileInfo.baseUrl.replace('localhost', baseIp);
            fileInfo.url = fileInfo.url.replace('localhost', baseIp);
            var id = Images.insert(fileInfo);
            if (id) {
                currentId.set(id);
            }
        }
    },
    uploadImg: function () {
        return info.get().url || imgSrc.get();
    }
});

Template.add.events({
    'submit form': function (evt, temp) {
        evt.preventDefault();
        var name,category,price,id,res,
            form = evt.currentTarget;
        if (id = currentId.get()) {
            name = form.name.value;
            category = form.category.value;
            price = form.price.value;
            res = Images.update({_id: id}, {
                $set: {
                    itemName: name,
                    price: price,
                    category: category
                }
            });

            if (res) {
                sAlert.info('操作成功!');
                setTimeout(function () {
                    Router.go('/');
                    form.reset();
                }, 1000);
            }
        }
    }
});