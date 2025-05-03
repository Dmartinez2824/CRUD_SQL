export const loadView = async (hash) => {
    try{
    const hash = location.hash.slice(1);
    const response = await fetch (`/scr/wiews(${hash}/index.html`);
    const divmain = document.getElementById('main');
    const html = await response.text();
    divmain.innerHTML = html;
} catch (error) {
    console.error(`Error cargando vista "${hash}":`, error);
  }
    };

    // helpers/loadView.js
// export const loadView = async (container, hash) => {
//     try {
//       const res = await fetch(`/src/views/${hash}/index.html`);
//       const html = await res.text();
//       container.innerHTML = html;
//     } catch (error) {
//       console.error(`Error cargando vista "${hash}":`, error);
//     }
//   };