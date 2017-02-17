import angular from 'angular';
import loadingTpl from './loaing.tpl.html';

export default angular.module('stephen.ui.loading',[])
    .component('suLoading', {
        template: loadingTpl
    }).name;