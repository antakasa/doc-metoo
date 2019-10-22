import '@babel/polyfill';
import {startApp} from './src/app';
const removeHeaderAndFooter = () => {
  const header = document.querySelector('header');
  if (header) header.style.display = 'none';
  const footer = document.querySelector('.ydd-footer');
  if (footer) footer.style.display = 'none';
};

const appName = process.env.APP_NAME;

const eventHandlers = {
  onMount: (name, element) => {
    if (name !== appName) {
      console.log(name + ' was mounted, not me.');
      return;
    }
    const root = element.querySelector('#root');
    if (!root) {
      return;
    }

    removeHeaderAndFooter();
    startApp(root);
  },
  //Todo: Login handlers
};

const plusAppMethods = {
  embedYlePlayer: function(elem, id, options) {
    window.ylePlayer.render({
      element: elem,
      props: {
        id: id,
        playFullScreen: !!options.playFullScreen,
      },
    });
  },
  login: function() {
    window.console && console.log('login not supported');
  },
};

if (process.env.NODE_ENV === 'production' && window.yleVisualisation) {
  // SYND OR FYND
  window.yleVisualisationEmbeds = window.yleVisualisationEmbeds || {};
  window.yleVisualisationEmbeds[appName] = eventHandlers;
} else if (process.env.NODE_ENV === 'production' && !window.yleVisualisation) {
  // ARTICLE RENDERER OR STATIC HOSTING
  eventHandlers.onMount(appName, document.body, plusAppMethods);
  window.plusApp = window.plusApp || {};
} else if (process.env.NODE_ENV === 'development') {
  const root = document.querySelector('#root');
  if (root) {
    startApp(root);
  }
} else {
  console.log('no env');
}
