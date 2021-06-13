import Vue from 'vue';
import VueGtag from 'vue-gtag';

const getGDPR = localStorage.getItem('GDPR:accepted');

Vue.use(VueGtag, {
    config: { id: process.env.GA_MEASUREMENT_ID },
    bootstrap: getGDPR === 'true',
    appName: 'Géode',
    enabled: getGDPR === 'true'
});