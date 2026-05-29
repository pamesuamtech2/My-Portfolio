// 1. Seleccionamos el botón y la etiqueta <html> de tu documento
const botonOscuro = document.getElementById('btnDarkMode');
const etiquetaHtml = document.documentElement;

// 2. Le decimos al botón que escuche cuando le des clic
botonOscuro.addEventListener('click', () => {
  
  // 3. toggle() prende y apaga la clase 'dark' en el HTML
  etiquetaHtml.classList.toggle('dark');
  
  // 4. Cambiamos el emoji visualmente para el usuario
  if (etiquetaHtml.classList.contains('dark')) {
    botonOscuro.textContent = '🌙'; // Si tiene la clase dark, mostramos la luna
  } else {
    botonOscuro.textContent = '💡'; // Si no la tiene, mostramos el foquito
  }
  
});