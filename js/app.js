$(document).foundation();

$(document).on('ready', function() {
    $(".regular").slick({
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 3
    });
  });

$("#imgmain").elevateZoom();

window.addEventListener("load", function(event) {
  var productDetails = document.getElementById('productDetails');
  var opendetails = document.getElementById('opendetails');
  var catalogProductSeasons = document.getElementById('catalogProductSeasons');
  var catalogProductSeasons2 = document.getElementById('catalogProductSeasons2');

  productDetails.classList.add("classnone");

  opendetails.addEventListener("click", function () {
      productDetails.classList.remove("classnone");
      catalogProductSeasons.classList.add("classnone");
      catalogProductSeasons2.classList.add("classnone");
  });

  var imgsecondary1 = document.getElementById("imgsecondary1").getAttribute("src");
  var imgsecondary2 = document.getElementById("imgsecondary2").getAttribute("src");
  var imgsecondary3 = document.getElementById("imgsecondary3").getAttribute("src");

  document.getElementById("aimgsecondary1").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("imgmain").setAttribute("src",imgsecondary1);
  });
  document.getElementById("aimgsecondary2").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("imgmain").setAttribute("src",imgsecondary2);
  });
  document.getElementById("aimgsecondary3").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("imgmain").setAttribute("src",imgsecondary3);
  });

  var btnaddcar = document.getElementById("btnaddcar");
  btnaddcar.addEventListener("click", function () {
    document.getElementById("imgbodybag").setAttribute("src",document.getElementById("imgmain").getAttribute("src"));
  });

});
