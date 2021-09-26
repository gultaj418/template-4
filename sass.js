$(document).ready(function () {
  $(".testimonials-slider").owlCarousel({
    loop: true,
    items: 3,
    dots: false,
    margin: 30,
    responsive: {
      0: { items: 1 },
      1200: {
        items: 3,
      },
    },
  });
  $(".why-choose").owlCarousel({
    loop: true,
    items: 3,
    dots: false,
    margin: 30,
    responsive: {
      0: { items: 1 },
      1200: {
        items: 3,
      },
    },
  });
});

$(".offer").owlCarousel({
  loop: true,
  items: 3,
  dots: false,
  margin: 30,
  responsive: {
    0: { items: 1 },
    1200: {
      items: 3,
    },
  },
});
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    responsive: {
      0: { items: 1 },
      1200: {
        items: 3,
      },
    },
  });
});

var inputs = document.getElementsByClassName("input");
function SendMessage(e) {
  e.preventDefault();
  let isSubmited = true;
  for (let input of inputs) {
    if (!input.value.trim()) {
      input.nextElementSibling.classList.remove("d-none");
      isSubmited = false;
    }
  }
  if (!isSubmited) {
    return;
  }
  toastr.success("Mesajiniz muveffeqiyyetle gonderildi!!");
  for (let input of inputs) {
    input.value = "";
  }
}
for (let input of inputs) {
  input.onkeyup = function () {
    if (!input.value) {
      input.nextElementSibling.classList.remove("d-none");
    } else {
      input.nextElementSibling.classList.add("d-none");
    }
  };
}
