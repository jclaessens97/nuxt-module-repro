import PrimeVue from 'primevue/config';

// services
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

// components
import AutoComplete from 'primevue/autocomplete';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import Checkbox from 'primevue/checkbox';
import Column from 'primevue/column';
import ConfirmDialog from 'primevue/confirmdialog';
import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import FileUpload from 'primevue/fileupload';
import Image from 'primevue/image';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import Knob from 'primevue/knob';
import ProgressSpinner from 'primevue/progressspinner';
import RadioButton from 'primevue/radiobutton';
import Sidebar from 'primevue/sidebar';
import Slider from 'primevue/slider';
import Tag from 'primevue/tag';
import Timeline from 'primevue/timeline';
import Toast from 'primevue/toast';

/**
 * Registers all primevue components that are able to run in a SSR context.
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });

  // services
  nuxtApp.vueApp.use(ConfirmationService);
  nuxtApp.vueApp.use(ToastService);

  // components
  nuxtApp.vueApp.component('pv-AutoComplete', AutoComplete);
  nuxtApp.vueApp.component('pv-Avatar', Avatar);
  nuxtApp.vueApp.component('pv-Button', Button);
  nuxtApp.vueApp.component('pv-Calendar', Calendar);
  nuxtApp.vueApp.component('pv-Checkbox', Checkbox);
  nuxtApp.vueApp.component('pv-Column', Column);
  nuxtApp.vueApp.component('pv-ConfirmDialog', ConfirmDialog);
  nuxtApp.vueApp.component('pv-DataTable', DataTable);
  nuxtApp.vueApp.component('pv-DataView', DataView);
  nuxtApp.vueApp.component('pv-DataViewLayoutOptions', DataViewLayoutOptions);
  nuxtApp.vueApp.component('pv-Dialog', Dialog);
  nuxtApp.vueApp.component('pv-Dropdown', Dropdown);
  nuxtApp.vueApp.component('pv-FileUpload', FileUpload);
  nuxtApp.vueApp.component('pv-Image', Image);
  nuxtApp.vueApp.component('pv-InputMask', InputMask);
  nuxtApp.vueApp.component('pv-InputNumber', InputNumber);
  nuxtApp.vueApp.component('pv-InputText', InputText);
  nuxtApp.vueApp.component('pv-Knob', Knob);
  nuxtApp.vueApp.component('pv-ProgressSpinner', ProgressSpinner);
  nuxtApp.vueApp.component('pv-RadioButton', RadioButton);
  nuxtApp.vueApp.component('pv-Sidebar', Sidebar);
  nuxtApp.vueApp.component('pv-Slider', Slider);
  nuxtApp.vueApp.component('pv-Tag', Tag);
  nuxtApp.vueApp.component('pv-Timeline', Timeline);
  nuxtApp.vueApp.component('pv-Toast', Toast);
});
