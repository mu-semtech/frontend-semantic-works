import Component from '@glimmer/component';

export default class MenuItemsComponent extends Component {
  get nextLevel() {
    return this.args.level + 1;
  }
}
