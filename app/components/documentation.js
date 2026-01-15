import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';

export default class DocumentationComponent extends Component {
  get currentDoc() {
    const url = this.args.currentDocUrl;
    return htmlSafe(`<zero-md src='${url}'></zero-md>`);
  }
}
