// --------------------------------------------------------
// -------------------- MENU
// --------------------------------------------------------

document.querySelector('.open-menu').onclick = function () {
  document.documentElement.classList.add('active-menu');
};

document.querySelector('.close-menu').onclick = function () {
  document.documentElement.classList.remove('active-menu');
};

document.documentElement.onclick = function (event) {
  if (event.target === document.documentElement) {
    document.documentElement.classList.remove('active-menu');
  }
};

// --------------------------------------------------------
// -------------------- LOADER
// --------------------------------------------------------
document.body.setAttribute("class", "noscroll");

document.getElementById("overlay").style.display = "block";
document.getElementById("spinner").style.display = "block";

window.onload = function () {
  document.getElementById("spinner").style.display = "none";
  document.getElementById("overlay").style.display = "none";

  document.body.className = document.body.className.replace(/\bnoscroll\b/, '');
}