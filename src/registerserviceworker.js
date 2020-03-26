'use strict';
(() => {
    if ('production' === process.env.NODE_ENV) {
        'serviceWorker' in navigator && window.addEventListener('load', function () {
            navigator.serviceWorker.register('service-worker.js').catch(() => {
            });
        });
    }
})();