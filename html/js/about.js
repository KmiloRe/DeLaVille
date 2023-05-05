const miSelect = document.getElementById('motivo');
  miSelect.addEventListener('change', () => {
    const opcionSeleccionada = miSelect.options[miSelect.selectedIndex].value;
    console.log(opcionSeleccionada);
  });
