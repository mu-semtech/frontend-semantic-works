import EmberObject from '@ember/object';
import Route from '@ember/routing/route';
import fetch from 'fetch';
import readmeUrl from 'mu-semtech/utils/github-readme-url';

export default class DocumentationTemplatesFromRepositoryRoute extends Route {
  async model({repository}){
    const url = readmeUrl(`mu-semtech/${repository}`);
    const response = await fetch(url);
    const markdown = await response.text();
    return EmberObject.create({ markdown, repository });
  }
}
