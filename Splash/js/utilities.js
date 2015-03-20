//here goes all function used as utilities in the application
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