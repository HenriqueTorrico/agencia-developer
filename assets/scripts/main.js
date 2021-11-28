$('.box-depoimentos').slick({
  dots: true,
  arrows: false,
  infinite: true,
  /* centerMode: true, */
  /* centerPadding: 0, */
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 609,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})

var btnMenu = document.querySelector('.menu-mobile i');

btnMenu.addEventListener('click', () => {
let itensMenu = document.querySelector('.itens-mobile');
  if(itensMenu.classList.contains('show')) {
    itensMenu.classList.remove('show');
    itensMenu.classList.add('hide');
  }else {
    itensMenu.classList.remove('hide');
    itensMenu.classList.add('show');
  }
})