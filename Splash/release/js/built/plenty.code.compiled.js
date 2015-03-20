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
;
resources = {};
//english resources
resources.en = {
    pages: [
        {
            name: 'home',
            title: 'Welcome!',
            urlContent: 'views/en/home.html'
        }, {
            name: 'contact-us',
            title: 'Contact Us',
            urlContent: 'views/en/contact.html'
        }, {
            name: 'web-pages',
            title: 'Be known in the web',
            urlContent: 'views/en/web_sites.html'
        }, {
            name: 'mobile-apps',
            title: 'Evolve to mobiles',
            urlContent: 'views/en/mobile-apps.html'
        }, {
            name: 'software',
            title: 'Exactly what you need',
            urlContent: 'views/en/software.html'
        }
    ],
    messages: [
        {
            id: 'email-sent',
            value: 'Thanks for contacting us <<USERNAME>>, await interesting news from us shortly! :)'
        },
        {
            id: 'email-not-sent',
            value: 'Sorry <<USERNAME>>, your message could not be sent :( but do not worry, write us to <b >info@plentycode.com</b> and let us know!'
        }
    ],
    labels: []
};

//Spanish Resources
resources.es = {
    pages: [
    {
        name: 'home',
        title: 'Bienvenido!',
        urlContent: 'views/es/home.html'
    }, {
        name: 'contact-us',
        title: 'Contáctanos',
        urlContent: 'views/es/contact.html'
    },
        {
            name: 'web-pages',
            title: 'Hazte conocer en la web',
            urlContent: 'views/es/web_sites.html'
        },
        {
            name: 'mobile-apps',
            title: 'Evoluciona a móviles',
            urlContent: 'views/es/mobile-apps.html'
        },
        {
            name: 'software',
            title: 'Justo como lo necesitas!',
            urlContent: 'views/es/software.html'
        }
    ],
    messages: [
        {
            id: 'email-sent',
            value: 'Gracias por contactarte con nosotros <<USERNAME>>, muy pronto tendrás noticias nuestras! :)'
        },
        {
            id: 'email-not-sent',
            value: 'Disculpa las molestias <<USERNAME>>, en este momento estamos presentando problemas :( escribenos a <b >info@plentycode.com</b> y comentanos!'
        }
    ],
    labels: []
};;$(function () {
    if (window.location.hash) {
        setTimeout('showContent()', 200);
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
    if (screen.width <= 699) {
        $('body').addClass('mobile');
    }
});

function showContent() {
    $('.menu-bottom').toggleClass('open');
    $('.plenty-logo').toggleClass('logo-to-corner');
    $('.plenty-info-box').toggleClass('open');
    $('.plenty-social').toggleClass('hidden');
};;//here goes all function used as utilities in the application
(function () {
    //initialize plenty object 
    window.plenty = {
        models: {},
        collections: {},
        views: {},
        router: {},
        util: {},
        api: {},
        resources: {}
    };
    plenty.apiPath = 'http://api.plentycode.com/';
    // plenty.apiPath = 'http://plentycode.azurewebsites.net/api/';
    // plenty.apiPath = '/';
})();

plenty.api.sendContactEmail = function (info) {
    return $.post(plenty.apiPath + 'SendEmail', info);
};

//validates the form and returns a bool that indicates if it is valid
plenty.util.validateForm = function (container) {
    var isValid = true;

    container.find('.required.error').removeClass('error');
    $(container.find('.required')).each(function () {
        var $input = $(this);
        if (!$input.val() && !$input.text()) {
            isValid = false;
            $input.addClass('error');
        }

    });
    return isValid;
};

plenty.util.setLoading = function (container) {
    container.find('input,button,textarea').attr('disabled', 'disabled');
    container.append('<div class="loading"></div>');
};

plenty.util.removeLoading = function (container) {
    container.find('.loading').remove();
    container.find('input,button,textarea').removeAttr('disabled');
};

plenty.util.getResources = function (lang) {
    //saves the language into the browser's localStorage
    if (lang) {
        localStorage.setItem('language', lang);
    }
    //if if firts time in the site it takes the language from the browser
    var language = localStorage.getItem('language') || window.navigator.userLanguage || window.navigator.language;

    //identifies the language
    var res = resources.en;
    if (language.indexOf('es') > -1) {
        res = resources.es;
    }
    //sets the global variable with the language selected
    plenty.resources = res;
    return res;
};

//gets a the message in the selected language
//receives the id f the message in Resources.js
//the replaceParams is an object: [{'username':'Carlos'}, {'email':'civan@plentycode.com'}] that replaces <<PARAMETER>> 
plenty.util.getMessage = function (messageId, replaceParams) {
    var result = '';
    if (plenty.resources && plenty.resources.messages) {
        //gets the message by the provided ID
        var message = _.findWhere(plenty.resources.messages, { id: messageId });
        if (message) {
            result = message.value;
            //if has parameter to replace, tryes to replace them 
            if (replaceParams) {
                //goes for each param
                $.each(replaceParams, function (i, param) {
                    //takes the key-value params and replace them
                    _.map(replaceParams[i], function (value, key) {
                        var find = '<<' + key.toUpperCase() + '>>';
                        result = result.replace(new RegExp(find, 'g'), value);
                    });
                });
            }
        }
    }
    return result;
};