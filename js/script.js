import ScrollSmooth from './modules/smooth-scroll.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tab-nav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initOperation from './modules/operation.js';
import initFetchAnimals from './modules/fetch-animals.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
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

initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initOperation();
initFetchAnimals();
initFetchBitcoin();
initAnimateScroll();
