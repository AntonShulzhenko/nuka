import $ from 'jquery'
import 'slick-slider'

const opportunitiesCarousel = () => {

  $('.js-opportunities-slider__carousel').each(function(){

    $(this).slick({
      prevArrow: "<button type='button' class='slick-prev'>" +
        "<svg class='icon slider-arrow'><use xlink:href=\"/img/sprite.svg#icon-slider-arrow\"></use></svg>" +
        "</button>",
      nextArrow: "<button type='button' class='slick-next'>" +
        "<svg class='icon slider-arrow'><use xlink:href=\"/img/sprite.svg#icon-slider-arrow\"></use></svg>" +
        "</button>",
      dots: true,
      customPaging(slick, index) {
        return `<button type="button" class="opportunities-slider__button">${$(slick.$slides[index]).children().children().data('text')}</button>`
      },
      appendDots: $(this).parent().parent().find('.js-opportunities-slider__dots'),
      arrows: false,
      fade: true,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            arrows: true,
            fade: false,
          }
        },
      ]
    });
  })
}

export default opportunitiesCarousel
