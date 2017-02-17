import angular from 'angular';
import loadingTpl from './loaing.tpl.html';
import './index.scss';

export default angular.module('stephen.ui.loading',[])
    .component('suLoading', {
        template: loadingTpl
    }).name;