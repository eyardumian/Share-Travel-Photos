/* Event handlers must execute after the page has loaded */
window.addEventListener("load", function() {

  var thumbnails = document.getElementById("thumbnails");
  var medImage = document.getElementById("image");
  var caption = document.getElementById("description");

  thumbnails.addEventListener('click', function (e) {

      medImage.src = "images/medium/" + e.target.title + ".jpg";
      caption.innerHTML = e.target.title;

  });

  caption.addEventListener('mouseover', function () {
    caption.style.transition = "opacity 1s";
    caption.style.opacity = .8;
  });

  caption.addEventListener('mouseout', function () {
    caption.style.opacity = 0;
  });

});
