export const categoriaController = () => {
  const main = document.getElementById('main');
  main.innerHTML = "";
  
  const contenedor = document.createElement('div');
  const formulario = document.createElement('form');
  formulario.setAttribute("class","formulario");
  contenedor.setAttribute("class","contenedor");
const campos = [
  { id: "id", label: "ID" },
  { id: "nombre", label: "Nombre" },
  { id: "descripcion", label: "Descripción" }
];

campos.forEach(campo => {
  const campoGrupo = document.createElement("div");
  campoGrupo.classList.add("campo");
  const label = document.createElement("label");
  label.setAttribute("for", campo.id); 
  label.textContent = campo.label; 

  const input = document.createElement("input");
  input.type = "text";  
  input.id = campo.id;               
  input.classList.add("input", `input-${campo.id}`); 
  if(campo.id === "id"){
    input.disabled = true;
    }
  input.placeholder = campo.label;

  campoGrupo.append(label, input);
  formulario.appendChild(campoGrupo);
});

const btnAgregar = document.createElement('button');
btnAgregar.textContent = 'Añadir categoria';
btnAgregar.classList.add('btn', 'btn-agregar');

/*=================== TABLA ===================== */

const contenedortabla = document.createElement('div');
const table = document.createElement('table');
table.className = "tabla";

const thead = document.createElement('thead');
const tr = document.createElement('tr');
const tbody = document.createElement('tbody');


campos.forEach(campo =>{
  const th = document.createElement('th');
  th.textContent = campo.label;
  th.classList.add('th', `th-${campo.id}`);
  tr.appendChild(th);
})
  thead.appendChild(tr);
  table.appendChild(thead);
  contenedortabla.appendChild(table);

  formulario.appendChild(btnAgregar);
  contenedor.append(formulario, table,contenedortabla);  
  main.append(contenedor);
  }
