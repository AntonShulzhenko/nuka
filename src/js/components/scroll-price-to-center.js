import $ from 'jquery'

const scrollPriceToCenter = () => {
  const $container = $('.js-prices');
  const $inner = $('.js-prices__wrapper')

  $(window).on('resize',function() {
    $container.animate({
      scrollLeft: (($inner.width() - $container.width())/ 2),
    }, 0);
  });

  $(document).ready(function() {
    $(window).trigger('resize');
  });
}

export default scrollPriceToCenter;
