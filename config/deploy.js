/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  //see https://github.com/ember-cli-deploy/ember-cli-deploy-revision-data/issues/52
  process.env.GIT_DISCOVERY_ACROSS_FILESYSTEM=1;
  let ENV = {
    build: {
      environment: 'development'
    },
    'ssh-index': { // copy and deploy index.html
      username: 'root',
      host: 'semantic.works',
      port: 22,
      // remoteDir:
      allowOverwrite: true,
      agent: process.env.SSH_AUTH_SOCK
    },
    'rsync': { // copy assets
      host: 'root@semantic.works',
      port: 22,
      // dest: '/data/app-semantic-works/frontend-semantic-works',
      delete: false,
      arg:['--verbose']
    }
  };

  if (deployTarget === 'development' || deployTarget === 'dev') {
    ENV['ssh-index']["remoteDir"] = "/data/app-semantic-works-dev/frontend-semantic-works",
    ENV['rsync']['dest'] = ENV['ssh-index']['remoteDir'];
  }

  if (deployTarget === 'production') {
    ENV.build.environment = "production";
    ENV['ssh-index']["remoteDir"] = "/data/app-semantic-works/frontend-semantic-works",
    ENV['rsync']['dest'] = ENV['ssh-index']['remoteDir'];
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
