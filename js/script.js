import ScrollSmooth from './modules/smooth-scroll.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropdownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import Operation from './modules/operation.js';
import fetchAnimals from './modules/fetch-animals.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import AnimateScroll from './modules/scroll-animate.js';

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

fetchAnimals('./animals-api.json', '.numeros-grid');

fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

const animateScroll = new AnimateScroll(
  "[data-anime='scroll']",
  window.innerHeight * 0.6,
);
animateScroll.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile(
  "[data-menu='button']",
  "[data-menu='list']",
  ['click'],
);
menuMobile.init();

const operation = new Operation('[data-semana]', );
operation.init()
