/**
 * Count
 */
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter_number");

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

document.addEventListener("DOMContentLoaded", () => {  
  selectSection();
  /*const menuItems = document.querySelectorAll('[data-section="contact"],[data-section="proven-experience-across-industries"]')
  menuItems.forEach(link => {
    link.addEventListener("click", () => {
      setTimeout(() => {
        selectSection();
      }, "250");
    });
  });*/
/*});

document.addEventListener("DOMContentLoaded", () => {*/
  const sections = ["proven-experience-across-industries", "contact"];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;

        if (entry.isIntersecting) {
          history.replaceState(null, "", `#${id}`);
          sections.forEach(section => {
            document.querySelector(`[data-section="${section}"]`).classList.remove("active");
          })
          document.querySelector(`[data-section="${id}"]`).classList.add("active");
        } else {
          if (window.location.hash === `#${id}`) {
            history.replaceState(null, "", " ");
            document.querySelector(`[data-section="${id}"]`).classList.remove("active");
          }
        }
      });
    },
    {
      root: null,
      threshold: 0.5,
    }
  );

  sections.forEach((id) => {
    const element = document.getElementById(id);
    if (element) observer.observe(element);
  });
});

const selectSection = () => {
  let urls = [
    "about-us",
    "proven-experience-across-industries",
    "contact",
    "staff-augmentation",
    "ai-development",
    "cloud-migration",
    "devops-automation",
    "mergers-acquisitions-tech-integration",
    "digital-transformation" 
  ]

  const currentUrl = window.location.href;
  const menuLinks = document.querySelectorAll(".nav-link, .dropdown-item, .navbar-brand");

  menuLinks.forEach(linkItem => {
    linkItem.classList.remove("active");
  })

  urls.forEach(url => { 
    if(currentUrl.includes(url)){
      menuLinks.forEach(linkItem => {
        if(linkItem.dataset.section === url || linkItem.dataset.subpages === url){
          if(linkItem.dataset.section === "services"){
            document.querySelector('[data-section="services"]').classList.add("active");
          }
          linkItem.classList.add("active");
        }
      })    
    }
  })
}
