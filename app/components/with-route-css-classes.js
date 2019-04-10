import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default class WithRouteCssClassesComponent extends Component {
  @service router

  classNameBindings = ['currentRouteClasses']
  attributeBindings = ['scrollPositionY']

  scrollPositionY = 0

  constructor(){
    super(...arguments);
    this.set('onScroll', () => this.set('scrollPositionY', window.scrollY));
  }

  didInsertElement() {
    window.addEventListener( 'scroll', this.onScroll );
  }

  willDestroyElement() {
    window.removeEventListener( 'scroll', this.onScroll );
  }

  @computed('router.currentRouteName')
  get currentRouteClasses() {
    const base = "route_";
    let prefix = base;
    let currentElements=[];
    this.router.currentRouteName.split(".").forEach( (routeSection) => {
      let newPrefix = prefix + `_${routeSection}`;
      currentElements.push( newPrefix );
      prefix = newPrefix;
    } );
    return currentElements.join(" ");
  }
}
