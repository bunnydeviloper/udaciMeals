'use strict';

describe('Service: orderManagement', function () {

  // load the service's module
  beforeEach(module('udaciMealsApp'));

  // instantiate service
  var orderManagement;
  beforeEach(inject(function (_orderManagement_) {
    orderManagement = _orderManagement_;
  }));

  it('should do something', function () {
    expect(!!orderManagement).toBe(true);
  });

});
