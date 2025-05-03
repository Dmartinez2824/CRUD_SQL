import { loadView } from "./helpers/loadView.js";

document.addEventListener("DOMContentLoaded", () => {
  loadView("inicio"); // Carga inicial por defecto

  document.addEventListener("click", (e) => {
    if (e.target.dataset.view) {
      const vista = e.target.dataset.view;
      loadView(vista);
    }
  });
});