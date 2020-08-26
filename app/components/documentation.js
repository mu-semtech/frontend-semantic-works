import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';

export default class DocumentationComponent extends Component {
  @tracked currentDoc = htmlSafe("<zero-md src='https://raw.githubusercontent.com/mu-semtech/mu-project/master/README.md'></zero-md>");

  @action
  changeDoc(url){
    this.currentDoc = htmlSafe("<zero-md src='"+url+"'></zero-md>");
  }
}
