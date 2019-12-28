import $ from 'jquery';
import 'slick-slider';

const carousel = () => {
  $('.carousel').each(function() {
    $(this).slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      prevArrow: `<button type="button" class="carousel__arrow carousel__arrow--prev slick-prev"><svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.75 12.1292L1 6.5L10.75 0.870835V12.1292Z" stroke="#232323" fill="none"/></svg></button>`,
      nextArrow: `<button type="button" class="carousel__arrow carousel__arrow--next slick-next"><svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 12.1292L11 6.5L1.25 0.870835V12.1292Z" stroke="#232323"/></svg></button>`,
    });
  });
};


export default carousel
