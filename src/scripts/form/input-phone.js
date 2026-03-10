const phoneInput = document.getElementById("phone");

//máscara para o formato do número de telefone (XX) XXXXX XXXX
phoneInput.addEventListener("input", (event) => {
  let value = event.target.value;
  value = value.replace(/\D/g, "");

  if (value.length > 6) {
    value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2 $3");
  } else if (value.length > 2) {
    value = value.replace(/(\d{2})(\d{0,5})/, "($1) $2");
  } else if (value.length > 0) {
    value = value.replace(/(\d{0,2})/, "($1");
  }

  event.target.value = value;
});
