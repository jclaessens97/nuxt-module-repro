import Editor from 'primevue/editor';

/**
 * Registers all primevue components that are not able to run in a SSR context.
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('pv-Editor', Editor);
});
