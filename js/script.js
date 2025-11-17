/**
 * Carrusel
 */
const swiper_carousel_1 = new Swiper(
  ".yes-we-stack-like-pros-swiper__carousel_1",
  {
    loop: true,
    freeMode: true,
    spaceBetween: 0,
    grabCursor: true,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
    freeMode: true,
    speed: 5000,
    freeModeMomentum: false,
    allowTouchMove: false,
    grabCursor: false,
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 10,
        spaceBetween: 0,
      },
    },
  }
);

const swiper_carousel_2 = new Swiper(
  ".yes-we-stack-like-pros-swiper__carousel_2",
  {
    loop: true,
    freeMode: true,
    spaceBetween: 0,
    grabCursor: true,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      reverseDirection: true,
      pauseOnMouseEnter: false,
    },
    freeMode: true,
    speed: 5000,
    freeModeMomentum: false,
    allowTouchMove: false,
    grabCursor: false,
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 10,
        spaceBetween: 0,
      },
    },
  }
);

/**
 * Count
 */
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const updateCount = () => {
      const speed = counter.getAttribute("data-speed") || 200;
      const target = +counter.getAttribute("data-target");
      const index = +counter.getAttribute("data-index");
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20); //
      } else {
        counter.innerText = `+${target.toLocaleString()}${
          index === 3 ? "K" : ""
        }`; // formato con comas o puntos
      }
    };

    updateCount();
  });
});

/**
 * Form
 */
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

const finalStep = document.getElementById("finalStep");
const result = document.getElementById("result");
const error = document.getElementById("error");

let seleccionPrincipal = "";
let seleccionSecundaria = "";
let selecctionTerciaria = "";
let selectEmail = "";

step1.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  seleccionPrincipal = e.target.dataset.option;

  deleteSelection(step1);
  e.target.classList.add("selected");

  step1.classList.remove("active");
  step2.classList.add("active");

  step2.innerHTML = "";
  step2.innerHTML = `
    <h3>2- When are you planning to start?</h3>
    <button class="form_btn_option" data-option="ASAP (next 15 days)">ASAP (next 15 days)</button>
    <button class="form_btn_option" data-option="1 Month">1 Month</button>
    <button class="form_btn_option" data-option="3+ Months">3+ Months</button>
    <button class="form_btn_option" data-option="Just exploring">Just exploring</button>
    <button class="form_btn_back" data-option="back" onclick="backBtn('step2', 'step1')">Back</button>
  `;
});

step2.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON" || e.target.dataset.option === "back")
    return;

  seleccionSecundaria = e.target.dataset.option;

  deleteSelection(step2);
  e.target.classList.add("selected");

  step2.classList.remove("active");
  step3.classList.add("active");

  step3.innerHTML = "";
  step3.innerHTML = `
    <h3>3- Have you ever worked with Staff Augmentation?</h3>
    <button class="form_btn_option" data-option="Yes, I’m used to.">Yes, I’m used to.</button>
    <button class="form_btn_option" data-option="No, but I know how it works.">No, but I know how it works.</button>
    <button class="form_btn_option" data-option="No, I’ve never used it.">No, I’ve never used it.</button>
    <button class="form_btn_back" data-option="back" onclick="backBtn('step3', 'step2')">Back</button>
  `;
});

step3.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON" || e.target.dataset.option === "back")
    return;

  selecctionTerciaria = e.target.dataset.option;

  deleteSelection(step3);
  e.target.classList.add("selected");

  step3.classList.remove("active");
  finalStep.classList.add("active");
});

document.getElementById("sendBtn").addEventListener("click", () => {
  if (!validateEmail(document.getElementById("email").value)) {
    error.innerHTML = "Please enter a valid email like example@domain.com";
    setTimeout(() => {
      error.innerHTML = "";
    }, 5000);
    return;
  }
  selectEmail = document.getElementById("email").value;
  result.innerHTML = `<div>Thank you, our CTO will be in touch with you.</div><div>1- ${seleccionPrincipal}</div><div> 2- ${seleccionSecundaria}</div><div> 3- ${selecctionTerciaria}</div><div> 4- email: ${selectEmail}</div>`;
  finalStep.classList.remove("active");
  deleteSelection(step1);
  resetForm();
});

const backBtn = (step, stepBack) => {
  let stepCurrent = document.getElementById(step);
  let stepB = document.getElementById(stepBack);

  stepCurrent.classList.remove("active");
  stepB.classList.add("active");
};

const resetForm = () => {
  setTimeout(() => {
    seleccionPrincipal = "";
    seleccionSecundaria = "";
    selecctionTerciaria = "";
    selectEmail = "";
    document.getElementById("email").value = "";

    step1.classList.add("active");
    step2.classList.remove("active");
    step3.classList.remove("active");
    finalStep.classList.remove("active");

    result.innerHTML = "";
  }, 5000);
};

const deleteSelection = (step) => {
  let stepBtn = step.querySelectorAll("button");
  stepBtn.forEach((btn) => {
    if (btn.classList.contains("selected")) {
      btn.classList.remove("selected");
    }
  });
};

const validateEmail = (email) => {
  const regex = /^[^@]+@[^@]+\.[^@]+$/;
  return regex.test(email.trim());
};
