'use strict';

describe('Component: TiendaComponent', function () {

  // load the controller's module
  beforeEach(module('videoClubApp'));

  var TiendaComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    TiendaComponent = $componentController('TiendaComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
