"use strict";

QUnit.module('main', function () {
  QUnit.test('should add two numbers', function (assert) {
    assert.equal(add(1, 1), 2, '1 + 1 = 2');
  });
});