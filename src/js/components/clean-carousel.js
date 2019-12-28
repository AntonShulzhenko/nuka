import $ from 'jquery';
import 'slick-slider';

const cleanCarousel = () => {
  $('.clean-carousel').each(function() {

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


export default cleanCarousel;
