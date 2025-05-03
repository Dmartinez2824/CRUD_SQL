
import { loadView } from "../helpers/loadView.js";
import { categoriaController } from "../views/categoria/categoriacontroller.js";
import { inicioController } from "../views/inicio/inicioControlador.js";
import { productoController } from "../views/producto/productoController.js";


const routes = {
    inicio: {
      "template": "inicioControlador/index.html",
      controlador: inicioController
    },
  productos: {
    "template": "productoController/index.html",
    controlador: productoController
  },
  categorias: {
    "template": "controladorcategorias/index.html",
    controlador: categoriaController
  }

};


export const router = (app) => {
    const hash = location.hash.slice(1) || 'inicio'; 
    const route = matchRoute(hash);
    if (!route) {
      console.error(`Ruta no encontrada: ${hash}`);
      return;
    }
  
    const { template, controlador } = route;
  
    // Cargar la vista
    loadView(app, template);
  
    if (typeof controlador === "function") {
      controlador();
    }
  };

  const matchRoute = (hash) => {
    if (!hash) return routes["inicio"];
  
    for (const route in routes) {
      if (route === hash) {
        return routes[route];
      }
    }
  
    return null; 
  };
  
