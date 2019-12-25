const footerSpoiler = () => {

  $('.footer-info__more').click(() => {
    $('.footer-info__description').toggleClass('is-open');
  })
}

export default footerSpoiler;
