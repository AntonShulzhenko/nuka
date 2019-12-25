import $ from 'jquery'
import 'slick-slider'

const testimonialsCarousel = () => {
  $('.js-reviews-slider').slick({
    prevArrow:"<button type='button' class='slick-prev'>" +
      "<svg class='icon slider-arrow'><use xlink:href=\"/img/sprite.svg#icon-slider-arrow\"></use></svg>" +
      "</button>",
    nextArrow:"<button type='button' class='slick-next'>" +
      "<svg class='icon slider-arrow'><use xlink:href=\"/img/sprite.svg#icon-slider-arrow\"></use></svg>" +
      "</button>"
  })
}

export default testimonialsCarousel;
