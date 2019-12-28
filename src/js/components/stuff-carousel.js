import $ from 'jquery';
import 'slick-slider';

const stuffCarousel = () => {
  $('.stuff-carousel').each(function() {

    $(this).slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: false,
      nextArrow: false,
      fade: true,
    });
  });
};


export default stuffCarousel;
