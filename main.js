function validarCedula() {
  const cedula = document.getElementById('cedula').value.trim();

  // Validación de si la cédula solo tiene números
  if (!/^\d+$/.test(cedula)) {
    document.getElementById('resultado').innerHTML = "La cédula debe contener solo números.";
    document.getElementById('resultado').className = "result invalid";
    return;
  }

  // Función para validar usando el algoritmo de Luhn
  let suma = cedula.split('').reverse().reduce((acum, digito, i) => {
    digito = parseInt(digito);
    if (i % 2 !== 0) digito = (digito * 2 >= 10) ? digito * 2 - 9 : digito * 2;
    return acum + digito;
  }, 0);

  const esValida = suma % 10 === 0;
  const mensaje = esValida ? `La cédula es válida. Dígito verificador: ${cedula[cedula.length - 1]}` : "La cédula es inválida.";

  document.getElementById('resultado').innerHTML = mensaje;
  document.getElementById('resultado').className = esValida ? "result valid" : "result invalid";
}
