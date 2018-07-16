require('./global.css');

import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import 'bootstrap-css';
import routing from './configs/routing';
import config from './configs/config';
import ApiService from './services/api.service';
import searchOfRep from './components/searchOfRep/searchOfRep.component';

export default angular
    .module('repos', [angularUiRouter])
    .config(routing)
    .config(config)
    .service('ApiService', ApiService)
    .component('searchOfRep', searchOfRep);

