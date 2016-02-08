'use strict';

describe('myApp.people module', function() {

  beforeEach(module('myApp.people'));

  describe('people controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var peopleCtrl = $controller('peopleCtrl');
      expect(peopleCtrl).toBeDefined();
    }));

  });
});