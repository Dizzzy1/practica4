function validarCedula() {
    const cedula = document.getElementById('cedula').value.trim();
  
    // Validación de si la cédula solo tiene números
    if (!/^\d+$/.test(cedula)) {
      document.getElementById('resultado').innerHTML = "La cédula debe contener solo números.";
      document.getElementById('resultado').className = "result invalid";
      return;
    }
  
    // Función para validar usando el algoritmo de Luhn
    const cedulaInvertida = cedula.split('').reverse();
  
    let suma = 0;
    for (let i = 0; i < cedulaInvertida.length; i++) {
      let digito = parseInt(cedulaInvertida[i]);
  
      if (i % 2 !== 0) {
        digito *= 2;
        if (digito >= 10) {
          digito = digito - 9;
        }
      }
  
      suma += digito;
    }
  
    if (suma % 10 === 0) {
      document.getElementById('resultado').innerHTML = "La cédula es válida.";
      document.getElementById('resultado').className = "result valid";
    } else {
      document.getElementById('resultado').innerHTML = "La cédula es inválida.";
      document.getElementById('resultado').className = "result invalid";
    }
  }
  