import { defineConfig } from 'vite';
import { extensions, classicEmberSupport, ember } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';

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
  ],
});
