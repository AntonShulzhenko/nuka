// import Gumshoe from 'gumshoejs';
// import menu from './components/menu';
// import ResponsiveTabs from './components/responsive-tabs';
// import countryPhoneSelect from './components/country-phone-select';
// import testimonialsCarousel from './components/testimonials-carousel'
// import opportunitiesCarousel from './components/opportunities-carousel'
// import tabs from './components/tabs'
// import scrollPriceToCenter from './components/scroll-price-to-center'
// import dropdown from './components/dropdown'
// import footerSpoiler from './components/footer-spoiler'
import anchorScroll from './components/anchor-scroll'

import carousel from './components/carousel';
import stuffCarousel from './components/stuff-carousel';
import cleanCarousel from './components/clean-carousel';
//
// menu();
// tabs('.price-section__tab', '.price-section__content');
// tabs('.opportunities-tabs__button', '.opportunities-tabs__content', true);
// scrollPriceToCenter();
// testimonialsCarousel();
// opportunitiesCarousel();
// dropdown();
// footerSpoiler();
//
// const ownersTabs = new ResponsiveTabs('#owners-tabs');
// const staffTabs = new ResponsiveTabs('#staff-tabs');
// const playersTabs = new ResponsiveTabs('#players-tabs');
//
// countryPhoneSelect('#tel', '#tel-input-field');
//

// if(document.getElementById('spy')) {
//   const spy = new Gumshoe('#spy a', {
//     offset: () => {
//       return header.getBoundingClientRect().height + headerOffset;
//     }
//   });
// }
// anchorScroll('#scroll-to-top', header.getBoundingClientRect().height, true);

const header = document.querySelector('.header');
// const headerOffset = 16;
// anchorScroll('.nav__link', header.getBoundingClientRect().height + headerOffset);
anchorScroll('.nav__link', header.getBoundingClientRect().height);

carousel();
stuffCarousel();
cleanCarousel();
