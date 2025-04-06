$('[name="phone"]').mask('+7 (999) 999-99-99');

// slick slider
$('.gallery-slider').slick({
  slidesToShow: 3,
  appendArrows: '.gallery-slider__nav',
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
});

$('.certificates-slider').slick({
  slidesToShow: 3,
  appendArrows: '.certificates-slider__nav',
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
});

$('.news-slider').slick({
  slidesToShow: 1,
  fade: true,
  appendArrows: '.news-slider__nav',
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
});

$('.products-slider').slick({
  slidesToShow: 2,
  appendArrows: '.products-slider__nav',
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
});

$('.application-slider').slick({
  slidesToShow: 3,
  appendArrows: '.application-slider__nav',
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
});

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});