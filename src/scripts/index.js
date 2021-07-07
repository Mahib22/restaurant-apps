import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/navbar.css';
import '../styles/content.css';
import '../styles/responsive.css';
import './utils/notification-helper';

import App from './views/app';
import swRegister from './utils/sw-register';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
 
const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
  skipLink: document.querySelector('#skipLink'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
 
window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

// get year footer
const getYear = new Date();
document.getElementById('year').innerHTML = getYear.getFullYear();

