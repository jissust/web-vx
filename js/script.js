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
  // 1. Seleccionar todos los enlaces del menú (nav-link y dropdown-item)
  const menuLinks = document.querySelectorAll(".nav-link, .dropdown-item, .navbar-brand");
  console.log("Menu Links:", menuLinks);
  // 2. Agregar evento de click a cada enlace
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      const section = link.dataset.section || "";
      const subpage = link.dataset.subpages || "";
      console.log("Clicked link - Section:", section, "Subpage:", subpage);
      // 3. Guardar la selección en localStorage
      localStorage.setItem("menu_section", section);
      localStorage.setItem("menu_subpage", subpage);

      menuLinks.forEach(link => {
        link.classList.remove("active");
        if(!subpage && (link.dataset.section === section && link.dataset.subpages === "")) {
          link.classList.add("active");
        }
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
  }
});