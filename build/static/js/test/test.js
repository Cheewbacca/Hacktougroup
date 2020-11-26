"use strict";

QUnit.test("should show alternative menu", function (assert) {
  var burger = $('#burger');
  burger.click();
  assert.equal(burger.hasClass('closed'), true, "It has the class!");
});