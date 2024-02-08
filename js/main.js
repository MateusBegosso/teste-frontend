export function submitData() {
  let form = document.getElementById("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let inputs = form.getElementsByTagName("input");
    let message = "";

    // Adiciona validação para CPF e telefone
    let cpfInput = form.querySelector("#cpf");
    let telInput = form.querySelector("#tel");

    if (cpfInput && !validateCPF(cpfInput.value)) {
      alert("Por favor, preencha o CPF corretamente.");
      return;
    }

    if (telInput && !validateTel(telInput.value)) {
      alert("Por favor, preencha o número de telefone corretamente.");
      return;
    }

    for (const element of inputs) {
      if (element.type !== "checkbox") {
        message += element.name + ": " + element.value + "\n";
        element.value = "";
      }
    }

    alert(message);
  });
}

function validateCPF(cpf) {
  return cpf.replace(/\D/g, "").length === 11;
}

function validateTel(tel) {
  return (
    tel.replace(/\D/g, "").length === 10 || tel.replace(/\D/g, "").length === 11
  );
}
