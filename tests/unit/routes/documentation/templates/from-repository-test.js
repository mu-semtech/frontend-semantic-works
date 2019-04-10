import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | documentation/templates/from-repository', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:documentation/templates/from-repository');
    assert.ok(route);
  });
});
