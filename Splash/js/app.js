/// <reference path="utilities.js" />
//main application logic file
$(function () {
    //loads the resources
    plenty.util.getResources();

    plenty.models.Info = Backbone.Model.extend({
        defaults: function () {
            return {
            };
        },
        get: function (name, lang) {
            var res = _.findWhere(plenty.util.getResources(lang).pages, { name: name });

            if (res && res.urlContent) {
                res.server = $.get(res.urlContent);
            }
            return res;
        }
    });

    plenty.models.Contact = Backbone.Model.extend({
        defaults: function () {
            return {
            };
        },
        sendContactEmail: function (info) {
            var el = $('#contact-form');
            if (plenty.util.validateForm(el)) {
                plenty.util.setLoading(el);
                plenty.api.sendContactEmail(info).done(function (resp) {
                    if (resp.success) {
                        el.find('input,textarea').val('');
                        el.find('.form-message').html(plenty.util.getMessage('email-sent', [{ 'username': info.Name }]));
                    } else {

                        el.find('.form-message').html(plenty.util.getMessage('email-not-sent', [{ 'username': info.Name }]));
                    }
                    plenty.util.removeLoading(el);
                }).error(function (resp) {
                    el.find('.form-message').html(plenty.util.getMessage('email-not-sent', [{ 'username': info.Name }]));
                    plenty.util.removeLoading(el);
                });
            }

        }
    });


    /** VIEWS **/
    plenty.views.InfoView = Backbone.View.extend({
        el: $('.plenty-info-box'),
        template: _.template($('#info-item-template').html()),
        model: new plenty.models.Info(),
        render: function (goto, lang) {
            var info = this.model.get(goto, lang);
            if (!info) {
                goto = 'home';
                info = this.model.get(goto, lang);
            }
            info.content = info.content || '<div class="loading"></div>';
            this.$el.html(this.template(info));

            if (info.server) {
                info.server.done(function (data) {
                    $('.plenty-info-box').find('.plenty-box-content').html(data);

                    $('#contact-form').submit(function () {
                        var contact = new plenty.models.Contact();
                        var contactInfo = { 'Name': $('#contact-name').val(), 'Email': $('#contact-email').val(), 'Comments': $('#contact-comments').val() };
                        contact.sendContactEmail(contactInfo);
                        return false;
                    });
                    if ($('#tabs').length > 0) {
                        var tabs = new CBPFWTabs(document.getElementById('tabs'));
                    }

                });
            }

            $('.plenty-icon').removeClass('selected');
            $('a[href="#' + goto + '"]').addClass('selected');
            return this;
        }

    });


    /**  *Routes    **/
    plenty.Router = Backbone.Router.extend({
        routes: {
            '': 'index',
            ':goto': 'index',
            ':goto/:lang': 'index',


        },
        initialize: function (options) {

        },
        index: function (goto, lang) {
            var infoView = new plenty.views.InfoView();
            infoView.render(goto, lang);

        }
    });
    new plenty.Router();
    Backbone.history.start();

});
