import ScrollSmooth from './modules/smooth-scroll.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initOperation from './modules/operation.js';
import fetchAnimals from './modules/fetch-animals.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import initAnimateScroll from './modules/scroll-animate.js';

const smoothScroll = new ScrollSmooth('[data-menu="suave"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion("[data-anime='accordion'] dt", 'active');
accordion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section",
);
tabNav.init();

const modal = new Modal(
  '[data-modal="open"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]',
);
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

fetchAnimals('../../animals-api.json', '.numeros-grid');

fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

initDropdownMenu();
initMenuMobile();
initOperation();
initAnimateScroll();
