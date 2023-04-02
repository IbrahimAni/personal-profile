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


















// function showAlert(action, type) {
//   var backgroundColor;
//   var message;

//   if (action === "added") {
//       backgroundColor = "bg-green-500";
//       message = "The book has been added.";
//   } else if (action === "updated") {
//       backgroundColor = "bg-blue-500";
//       message = "The book has been updated.";
//   } else if (action === "deleted") {
//       backgroundColor = "bg-red-500";
//       message = "The book has been deleted.";
//   } else {
//       backgroundColor = "bg-gray-500";
//       message = "An unknown action was performed.";
//   }

//   var alertHTML = `
//       <div class="fixed top-0 left-0 right-0 z-10">
//           <div class="${backgroundColor} text-white px-4 py-3 shadow-md" role="alert">
//               <p class="font-bold">${type == "error" ? "Error!" : "Success!"}</p>
//               <p class="text-sm">${message}</p>
//           </div>
//       </div>
//   `;

//   var alertElement = document.getElementById("alert");
//   alertElement.innerHTML = alertHTML;
//   alertElement.classList.remove("hidden");

//   setTimeout(function () {
//       alertElement.classList.add("hidden");
//       alertElement.innerHTML = '';
//   }, 3000);
// }