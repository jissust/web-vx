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
  const menuItems = document.querySelectorAll(".nav-link, .dropdown-item, .navbar-brand");
  menuItems.forEach(link => {
    link.addEventListener("click", () => {
      
      setTimeout(() => {
        selectSection();
      }, "250");
    });
  });

  // 1. Seleccionar todos los enlaces del menú (nav-link y dropdown-item)

  /*const menuLinks = document.querySelectorAll(".nav-link, .dropdown-item, .navbar-brand");
  // 2. Agregar evento de click a cada enlace
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      const section = link.dataset.section || "";
      const subpage = link.dataset.subpages || "";
      console.log("Clicked link - Section:", section, "Subpage:", subpage);
      // 3. Guardar la selección en localStorage
      localStorage.setItem("menu_section", section);
      localStorage.setItem("menu_subpage", subpage);

      menuLinks.forEach(linkItem => {
        linkItem.classList.remove("active");
      })
      link.classList.add("active");
    });
  });

  // 4. Al cargar, leer lo guardado
  const savedSection = localStorage.getItem("menu_section");
  const savedSubpage = localStorage.getItem("menu_subpage");

  if (savedSection) {
    // 5. Buscar el enlace que coincide con lo guardado
    menuLinks.forEach(link => {
      link.classList.remove("active"); // limpiar clases previas

      const linkSection = link.dataset.section;
      const linkSubpage = link.dataset.subpages;

      // Coincidencia exacta (section + subpage)
      if (linkSection === savedSection && linkSubpage === savedSubpage) {
        link.classList.add("active");
      }
    });
  }*/
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
      console.log("Current URL includes:", url);
      menuLinks.forEach(linkItem => {
        if(linkItem.dataset.section === url || linkItem.dataset.subpages === url){
          linkItem.classList.add("active");
        }
      })    
    }
  })
}