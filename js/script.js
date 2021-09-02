// accordion start
$(function () {
  $(".accordion-btn").on("click", function () {
    $(this).next(".accordion-list").slideToggle();
  });
});
// accordion end
// jqury
 $(document).ready(function(){
  let $sitelading = $('#site-landing');
  $sitelading.polygonizr();

  // Update size.
  $(window).resize(function () {
    $sitelading.polygonizr("stop");
    $sitelading.polygonizr({
      canvasHeight: $(this).height(),
      canvasWidth: $(this).width()
    });

    $sitelading.polygonizr("refresh");
  });
  // parallax 
  $('.parallax-window').parallax({imageSrc: '../img/code-2.jpg'});

 });
// secend start
var TIMEOUT = 6000;
var interval = setInterval(handleNext, TIMEOUT);
function handleNext() {
  var $radios = $('input[class*="slide-radio"]');
  var $activeRadio = $('input[class*="slide-radio"]:checked');

  var currentIndex = $activeRadio.index();
  var radiosLength = $radios.length;

  $radios.attr("checked", false);

  if (currentIndex >= radiosLength - 1) {
    $radios.first().attr("checked", true);
  } else {
    $activeRadio.next('input[class*="slide-radio"]').attr("checked", true);
  }
}
// secend end