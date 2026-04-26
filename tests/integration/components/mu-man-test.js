import { module, test } from 'qunit';
import { setupRenderingTest } from 'semantic-works/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | mu-man', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<MuMan />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <MuMan>
        template block text
      </MuMan>
    `);

    assert.dom().hasText('template block text');
  });
});
