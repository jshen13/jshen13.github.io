function showDesc(x) {
    var popup = document.getElementById(x);
    popup.classList.toggle("show");
}
  

function hideDesc(x) {
    var popup = document.getElementById(x);
    popup.classList.toggle("show");
}
  

function toggleNavBar() {
    var x = document.getElementById("nav");
    if (x.className === "nav-bar") {
      x.className += " responsive";
    } else {
      x.className = "nav-bar";
    }
  }