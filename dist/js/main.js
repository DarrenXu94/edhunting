function myFunction() {
  document.getElementById("icons").classList.toggle("show");
}

function showContact() {
  var x = document.getElementById("bio-wrapper-id");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showHome() {
  var x = document.getElementById("bio-wrapper-id");
  x.style.display = "none";
}
