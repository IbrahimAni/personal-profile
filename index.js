document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});


// async function submitForm(event) {
//   event.preventDefault();

//   const form = document.getElementById('contact-form');
//   const formData = new FormData(form);

//   try {
//     const response = await fetch('/send-email', {
//       method: 'POST',
//       body: formData,
//     });

//     if (response.ok) {
//       form.style.display = 'none';
//       document.getElementById('success-message').style.display = 'block';
//     } else {
//       // Handle error case
//     }
//   } catch (error) {
//     // Handle error case
//   }
// }