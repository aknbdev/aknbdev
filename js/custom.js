(function ($) {
  "use strict";

  // COLOR MODE
  $(".color-mode").click(function () {
    $(".color-mode-icon").toggleClass("active");
    $("body").toggleClass("dark-mode");
    $(".custom-alert").toggleClass("dark-mode");
  });

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
  });

  // SMOOTHSCROLL
  $(function () {
    $(".nav-link, .custom-btn-link").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });

  // TOOLTIP
  $(".social-links a").tooltip();
})(jQuery);

function copyElementText(id) {
  var text = document.getElementById(id).innerText;
  var elem = document.createElement("textarea");
  const element = document.getElementById(id);
  element.title = "copied";
  document.body.appendChild(elem);
  elem.value = text;
  elem.select();
  document.execCommand("copy");
  // alert(text + " copied");
  document.body.removeChild(elem);
}

let loading = false;
const toastContainer = document.querySelector(".custom-alert");
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const loaderEl = document.querySelector("#loader");
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
async function updateContactMessage(body) {
  loading = true;
  loaderEl.classList.remove("d-none");
  const response = await fetch(
    "https://api.albarakadarvoza.uz/api/v1/contact-me",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...body }),
    }
  );

  if (response.ok) {
    const data = await response.json();

    toastContainer.innerHTML = `<p class='text-success'>${data?.message}</p>`;
    toastContainer.classList.add("active");

    let timeOutId = setTimeout(() => {
      toastContainer.classList.remove("active");

      return clearTimeout(timeOutId);
    }, 5000);
    loading = false;
    form.reset();
    loaderEl.classList.add("d-none");
  } else {
    console.log(response.status);
    loading = false;
    form.reset();
    loaderEl.classList.add("d-none");
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (loading) return;
  let message = "";

  if (nameInput.value === "") {
    message += "<p class='error-text'>Name is required</p>";
  }
  if (emailInput.value === "") {
    message += "<p class='error-text'>Email is required</p>";
  }
  if (messageInput.value === "") {
    message += "<p class='error-text'>Message is required</p";
  }

  if (emailInput.value !== "" && emailRegExp.test(emailInput.value) === false) {
    message += "<p class='error-text'>Invalid Email</p>";
  }

  if (message !== "") {
    toastContainer.innerHTML = message;
    toastContainer.classList.add("active");

    let timeOutId = setTimeout(() => {
      toastContainer.classList.remove("active");

      return clearTimeout(timeOutId);
    }, 2000);
  } else {
    let reqBody = {
      secretKey: "rootan",
      email: emailInput.value,
      fullName: nameInput.value,
      message: messageInput.value,
    };

    await updateContactMessage(reqBody);
  }
});
