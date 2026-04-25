import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';

export default class DocumentationComponent extends Component {
  @tracked currentDoc = null;

  constructor(owner, args) {
    super(owner, args);
    this.changeDoc('https://raw.githubusercontent.com/mu-semtech/mu-project/master/README.md');
  }

  @action
  async changeDoc(url) {
    this.currentDoc = null;
    try {
      const resp = await fetch(url);
      const md = await resp.text();
      const html = window.marked.parse(md);
      this.currentDoc = htmlSafe(`<div class="md-body">${html}</div>`);
    } catch (e) {
      console.error('[docs] Failed to render markdown:', e);
      this.currentDoc = htmlSafe('<div class="md-body"><p class="md-load-error">Failed to load documentation.</p></div>');
    }

    requestAnimationFrame(() => {
      const el = document.querySelector('.docs-content');
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  }
}
