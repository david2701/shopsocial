import { Meteor } from 'meteor/meteor';
import { _meteorAngular } from 'meteor/angular';
import ngFileUpload from 'ng-file-upload';
import ngSanitize from 'angular-sanitize';
import angularElastic from 'angular-elastic';

angular
    .module('salephone', [
      'ionic',
      'angular-meteor',
      ngFileUpload,
      ngSanitize,
      'angularMoment',
      angularElastic,
      'ngCordova',
      'angular-meteor.auth'
    ]);

function onReady() {
  angular.bootstrap(document, ['salephone']);
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
