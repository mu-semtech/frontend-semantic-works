import Route from '@ember/routing/route';
import { htmlSafe } from '@ember/template';

export default class TutorialRoute extends Route {
  async model() {
    try {
      const resp = await fetch('/assets/tutorial.md');
      const md = await resp.text();
      const html = window.marked.parse(md);
      return htmlSafe(`<div class="md-body">${html}</div>`);
    } catch (e) {
      console.error('[tutorial] Failed to render markdown:', e);
      return htmlSafe('<div class="md-body"><p class="md-load-error">Failed to load tutorial.</p></div>');
    }
  }
}
