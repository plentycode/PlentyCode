/// <reference path="utilities.js" />

$(function () {
    plenty.Models.Info = Backbone.Model.extend({
        defaults: function () {
            return {
            };
        },
        get: function (name, lang) {
            var res = _.findWhere(plenty.util.getResources(lang), { name: name });

            if (res && res.urlContent) {
                res.server = $.get(res.urlContent);
            }
            return res;
        }
    });
    plenty.Models.Contact = Backbone.Model.extend({
        defaults: function () {
            return {
            };
        },
        sendContactEmail: function (info) {
            var el = $("#contact-form");
            if (plenty.util.validateForm(el)) {
                plenty.util.setLoading(el)
                plenty.api.sendContactEmail(info).done(function (resp) {
                    el.find('input,textarea').val('');
                    el.find('.form-message').html('Gracias por contactarte con nosotros ' + info.Name + ', muy pronto tendrás noticias nuestras! :)');
                    plenty.util.removeLoading(el);
                }).error(function (resp) {
                    el.find('.form-message').html('Disculpa las molestias ' + info.Name + ', en este momento estamos presentando problemas :( escribenos a <b >info@plentycode.com</b> y comentanos!');
                    plenty.util.removeLoading(el);
                });
            }

        }
    });
    /** VIEWS **/
    plenty.Views.InfoView = Backbone.View.extend({
        el: $(".plenty-info-box"),
        template: _.template($('#info-item-template').html()),
        model: new plenty.Models.Info(),
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
                    $(".plenty-info-box").find('.plenty-box-content').html(data);

                    $("#contact-form").submit(function () {
                        var contact = new plenty.Models.Contact();
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
            var infoView = new plenty.Views.InfoView();
            infoView.render(goto, lang);

        }
    });
    new plenty.Router;
    Backbone.history.start();

});
;
resources = {};
//english resources
resources.en = [
    {
        name: 'home',
        title: 'Welcome!',
        urlContent: 'views/home.html'
    }, {
        name: 'contact-us',
        title: 'Contact Us',
        urlContent: 'views/contact.html'
    },
        {
            name: 'web-pages',
            title: 'Web Solutions',
            urlContent: 'views/web_sites.html'
        },
        {
            name: 'mobile-apps',
            title: 'Mobile Solutions',
            content: '<b>Content 3</b>'
        },
        {
            name: 'windows-apps',
            title: 'Windows Applications',
            urlContent: 'views/software.html'
        },
        {
            name: 'user',
            title: 'User Expirience',
            content: '<b>Content 5</b>'
        }
];

//Spanish Resources
resources.es = [
    {
        name: 'home',
        title: 'Bienvenido!',
        urlContent: 'views/es/home.html'
    }, {
        name: 'contact-us',
        title: 'Contáctenos',
        urlContent: 'views/es/contact.html'
    },
        {
            name: 'web-pages',
            title: 'Soluciones Web',
            urlContent: 'views/es/web_sites.html'
        },
        {
            name: 'mobile-apps',
            title: 'Soluciones Móviles',
            content: '<b>Content 3</b>'
        },
        {
            name: 'windows-apps',
            title: 'Windows Applications',
            urlContent: 'views/es/software.html'
        },
        {
            name: 'user',
            title: 'User Expirience',
            content: '<b>Content 5</b>'
        }
];;
$(function () {
    if (window.location.hash) {
        setTimeout('showContent()', 800);
    }
    $('body').click(function (e) {
        showContent();
    });
    $('.menu-bottom, .plenty-info-box, .plenty-social').click(function (e) {
        e.stopPropagation();
    });
    $('.plenty-icon').click(function () {
        $('.plenty-icon').removeClass('selected');
        $(this).addClass('selected');
    });

});

function showContent() {
    $('.menu-bottom').toggleClass('open');
    $('.plenty-logo').toggleClass('logo-to-corner');
    $('.plenty-info-box').toggleClass('open');
    $('.plenty-social').toggleClass('hidden');
};
(function () {
    //initialize plenty object 
    window.plenty = {
        Models: {},
        Collections: {},
        Views: {},
        Router: {},
        util: {},
        api: {}
    };
    plenty.apiPath = 'http://plentycode.azurewebsites.net/api/';
})();

plenty.api.sendContactEmail = function (info) {
    return $.post(plenty.apiPath + 'SendEmail', info);
}
//validates the form and returns a bool that indicates if it is valid
plenty.util.validateForm = function (container) {
    var isValid = true;

    container.find('.required.error').removeClass('error');
    $(container.find('.required')).each(function () {
        var $input = $(this);
        if (!$input.val() && !$input.text()) {
            isValid = false;
            $input.addClass('error')
        }

    });
    return isValid;
}

plenty.util.setLoading = function (container) {
    container.find('input,button,textarea').attr('disabled', 'disabled');
    container.append('<div class="loading"></div>');
};
plenty.util.removeLoading = function (container) {
    container.find('.loading').remove();
    container.find('input,button,textarea').removeAttr('disabled');
};
plenty.util.getResources = function (lang) {
    if (lang) {
        localStorage.setItem("language", lang);
    }

    var language = localStorage.getItem("language") || window.navigator.userLanguage || window.navigator.language;
    var res = resources['en'];
    if (language.indexOf("es") > -1) {
        res = resources['es'];
    }
    return res;
}