import angular from 'angular';
import loading from './loading';
window.stephen = {};
stephen.name = 'stephen.ui';
var aa = angular.module('stephen.ui', [
    loading
]).name;

export default aa;