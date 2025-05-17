
import { loadView } from "../helpers/loadView.js";
import { categoriaController } from "../views/categoria/categoriaController.js";
import { editarController } from "../views/categoria/editarController.js";
import { inicioController } from "../views/inicio/inicioControlador.js";
import { productoController } from "../views/producto/productoController.js";


const routes = {
  inicio: {
      "template": "inicio/index.html",
      controlador: inicioController
    },
  productos: {
    "template": "producto/index.html",
    controlador: productoController
  },
  categoria: {
    "template": "categoria/index.html",
    controlador: categoriaController
  },
  categorias: { 
    "template": "categorias/categoria.html",
    controlador: categoriasController
  },
  "editarcategoria/:id": {
    "template": "categorias/editar.html",
    controlador: editarController
  }
};


export const router = async (app) => {
    const hash = location.hash.slice(1);
    const { template, controlador } = matchRoute(hash) || {};
  
    if (template && controlador) {
      await loadView(app, template);
      controlador(); 
    }
  };
  
  
const matchRoute = (hash) => {    

  const arreglo = hash.split('/');

  for (const route in routes) {
    const b = route.split('/');

    if (b.length !== arreglo.length) continue
    
    const params = {}
    const matched = b.every((parte, i) => { 
      if (parte.startsWith(":")) {
        const partName = parte.slice(1);
        const value = arreglo[i];
        params[partName] = value;
        return true
      }
      if (parte === arreglo[i]) {
        return true
      }
    })

    console.log(params);

    if (route === hash) {
      return routes[route];
    }
  }
} 
