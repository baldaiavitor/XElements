import XApp from './components/x-app/index.js';
import XContentPlacer from './components/x-content-placer/index.js';

(function () {
  window.customElements.define('x-app', XApp);
  window.customElements.define('x-content-placer', XContentPlacer);
})();

