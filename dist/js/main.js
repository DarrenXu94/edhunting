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

$('.cf a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});