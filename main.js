
require.config({
    waitSeconds: 0, //prevent timeout by requirejs
    paths: {
        css: 'https://cdnjs.cloudflare.com/ajax/libs/require-css/0.1.10/css',
        vue: 'https://cdn.rawgit.com/edgardleal/require-vuejs/aeaff6db/dist/require-vuejs' //Mismatched anonymous define() module
        ,
        jquery: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery",
        Vue2: "https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue",
        bootstrap: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.bundle"
        ,
        bootstrapMD: "https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design",
        popper: "https://unpkg.com/popper.js@1.12.6/dist/umd/popper",
        bootstrap_notify: "https://cdnjs.cloudflare.com/ajax/libs/mouse0270-bootstrap-notify/3.1.7/bootstrap-notify.min"
    },
    map: {
        '*': {
            css: 'css'
        }
    },
    config: {
        text: {
            useXhr: function (url, protocol, hostname, port) {
                // allow cross-domain requests - remote server allows CORS
                return true;
            }
        }
    },
    shim: {
        notify: ["jquery"],
        bootstrap: ["jquery"],
        bootstrapMD: ["jquery", "bootstrap", "popper.js"]
    },
    exclude: ['require-css/normalize']
});

//PRE-LOADINGS
define('notify', ["bootstrap_notify"]); //(LOAD WITHOUT WAIT 'jquery')

//DEFFINITIONS
var module = "";
define('Vue', ["Vue2"], function (vue) {
    window.Vue = vue;
    return vue;
});
define('popper.js', ["popper"], function (popper) {
    window.Popper = popper;
    return popper;
});

require([
    //BOOT
    "src/boot/exceptions",
    "src/boot/router",
    "src/boot/utils"
            ,
    //CSS LIBS 
    //"css!https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min",
    "css!https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min",
    "css!https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome",
    "css!https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min", //"bootstrap_notify" NEED    
    "css!src/index.css"
            ,
    //PRE LOAD
    "jquery", "Vue", "notify"
], function (exceptions, router) {
    exceptions();
    router();
});

/* NOT ESSENTIAL AND DELAYABLE LIBS */
require([
    "css!src/libs/bootstrap-modal-pages",
    "bootstrap",
    "bootstrapMD"
]);
