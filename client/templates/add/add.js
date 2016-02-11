/**
 * Created by Neal Li on 2016/2/5.
 */
'use strict'

var imgSrc,
    currentId,
    baseIp = '192.168.1.116';

Template.add.onCreated(function () {
    imgSrc = new ReactiveVar('');
    currentId = new ReactiveVar('');
});

Template.add.helpers({
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
                console.log(id);
                currentId.set(id);
            }
        }
    },
    uploadImg: function () {
        return imgSrc.get();
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
                sAlert.info('保存成功!');
                setTimeout(function () {
                    Router.go('/');
                    form.reset();
                }, 1000);
            }
        }
        sAlert.info('请先上传图片!');
    }
});