
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
};