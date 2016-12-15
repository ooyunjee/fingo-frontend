/*! FingoTokenService.js © heoyunjee, 2016 */
'use strict';

let angular = require('angular');

angular
  .module('FingoApp')
  // 팩토리 모듈 설정
  .factory('FingoLogin', ['$resource', function($resource){
    // Back-End API
    let url = 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/user/login/';
    return $resource(url);
  }])
  // 서비스 모듈 설정
  .service('FingoTokenService', ['FingoLogin', (FingoLogin)=>{

    let login = new FingoLogin();
    let _service = {
      'token': null,

      'fingoLogin': (email, pw)=> {
        login.email = email;
        login.password = pw;
        login.$save().then(()=> {
          console.log('success');
          window.location.href = '/main.html';
          _service.setToken(login.token);
        });
      },
      'getToken': ()=> {
        console.log('getToken', login.token);
        return _service.token;
      },
      'setToken': (token)=> {
        _service.token = token;
        console.log('setToken', _service.token);
      }
    };


    return _service;

  }]);
