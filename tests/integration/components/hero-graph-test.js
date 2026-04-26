import { module, test } from 'qunit';
import { setupRenderingTest } from 'semantic-works/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | hero-graph', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<HeroGraph />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <HeroGraph>
        template block text
      </HeroGraph>
    `);

    assert.dom().hasText('template block text');
  });
});
