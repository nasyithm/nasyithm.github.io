var text = "Am Nasyith Musyafa";
var chars = text.split("");
var container = document.getElementById("name");

var i = 0;
setInterval(function () {
  if (i < chars.length) {
    container.innerHTML += chars[i++];
  } else {
    i = 0;
    container.innerHTML = "";
  }
}, 200);

let topbutton = document.getElementById("topBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
