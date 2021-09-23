// Scrolling Animation

$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    800
  );
});

// Code to check divs which cause horizontal scrolling
// var docWidth = document.documentElement.offsetWidth;
// [].forEach.call(document.querySelectorAll("*"), function (el) {
//   if (el.offsetWidth > docWidth) {
//     console.log(el);
//   }
// });
