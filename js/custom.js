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

const errorToast = document.querySelector(".custom-alert");
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
async function updateContactMessage(body) {
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
    console.log(data);
  } else {
    console.log(response.status);
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let message = "";

  if (nameInput.value === "") {
    message += "<p>Name is required</p>";
  }
  if (emailInput.value === "") {
    message += "<p>Email is required</p>";
  }
  if (messageInput.value === "") {
    message += "<p>Message is required</p";
  }

  if (emailInput.value !== "" && emailRegExp.test(emailInput.value) === false) {
    message += "<p>Invalid Email</p>";
  }

  if (message !== "") {
    errorToast.innerHTML = message;
    errorToast.classList.add("active");

    let timeOutId = setTimeout(() => {
      errorToast.classList.remove("active");

      return clearTimeout(timeOutId);
    }, 2000);
  } else {
    let reqBody = {
      secretKey: "rootan",
      email: emailInput.value,
      fullName: nameInput.value,
      message: messageInput.value,
    };

    form.reset();

    await updateContactMessage(reqBody);
  }
});
