import { defineConfig } from 'vite';
import { extensions, classicEmberSupport, ember } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';

function emberHbsReload() {
  return {
    name: 'ember-hbs-reload',
    configureServer(server) {
      server.watcher.on('change', (file) => {
        if (file.endsWith('.hbs') || file.endsWith('.js') || file.endsWith('.ts')) {
          server.hot.send({ type: 'full-reload' });
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [
    classicEmberSupport(),
    ember(),
    babel({
      babelHelpers: 'runtime',
      extensions,
      // Don't run @embroider/macros babel plugin over Vite's pre-bundled dep
      // chunks — those files have no npm package owner and cause the plugin to throw.
      exclude: /node_modules\/\.vite\//,
    }),
    emberHbsReload(),
  ],
});
