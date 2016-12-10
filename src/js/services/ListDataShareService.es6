/*! ListDataShareService.js © yamoo9.net, 2016 */
'use strict';

let angular = require('angular');

angular
  .module('FingoApp')
  .factory('FingoSignup', ['$resource', function($resource){
    let url = 'http://eb-fingo-real.ap-northeast-2.elasticbeanstalk.com/api/v1.0/user/login/';
    return $resource(url);
  }]);
  // .service('ListDataShareService', ['Contact', (Contact)=>{
  //
  //   console.log('Contact', Contact);
  //   Contact.save({}, {email: 'heoyunjee@gmail.com', password: '1234'});
  //   // Contact.get(function(data) {
  //   //   console.log('data', data);
  //   //   return data;
  //   // });
  //
  //   let _service = {
  //     'selected_person': null,
  //     'people': [],
  //     'page': 1,
  //     'has_more': true,
  //     'is_loading': false,
  //     'loadContacts': ()=> {
  //       if ( _service.has_more && !_service.is_loading ) {
  //
  //         _service.is_loading = true;
  //
  //         let params = {
  //           // 'page': _service.page,
  //         };
  //
  //         Contact.get(params, (data)=>{
  //           angular.forEach(data.results, (person)=>{
  //             _service.people.push( new Contact(person) );
  //           });
  //           // 더 이상 불러올 다음 데이터가 존재하지 않을 경우
  //           // _service 객체의 has_more 속성을 false로 변경
  //           if (!data.next) {
  //             _service.has_more = false;
  //           }
  //           _service.is_loading = false;
  //         });
  //
  //       }
  //     },
  //     'loadMore': ()=> {
  //       if ( _service.has_more && !_service.is_loading ) {
  //         _service.page += 1;
  //         _service.loadContacts(); // page = 2, 3, ...
  //       }
  //     }
  //   };
  //
  //   _service.loadContacts(); // 초기 실행 page = 1
  //
  //   return _service;
  //
  // }]);
