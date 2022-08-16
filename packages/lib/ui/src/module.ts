import {
  defineNuxtModule,
  addComponentsDir,
  addPlugin,
  createResolver,
} from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: '@proj/ui',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    nuxt.options.css = [
      'primevue/resources/themes/md-light-deeppurple/theme.css',
      'primevue/resources/primevue.min.css',
      'primeicons/primeicons.css',
      'primeflex/primeflex.css',
      ...nuxt.options.css,
    ];
    nuxt.options.build.transpile.push('primevue');

    const pluginDir = resolve(__dirname, 'runtime', 'plugins');
    addPlugin(resolve(pluginDir, 'primevue.plugin.ts'));
    addPlugin(resolve(pluginDir, 'primevue.plugin.client.ts'));

    addComponentsDir({
      path: resolve(__dirname, 'runtime', 'components'),
      prefix: 'sb',
    });
  },
});
