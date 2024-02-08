import { submitData } from "./main.js";

const telInput = document.getElementById("tel");
const cpfInput = document.getElementById("cpf");
const form = document.getElementById("form");

const telMask = () => {
  let tel = telInput.value.replace(/\D/g, "");
  tel = tel.replace(/^(\d{2})(\d{8,9})$/, "($1) $2");
  telInput.value = tel;
};

const cpfMask = () => {
  let cpf = cpfInput.value.replace(/\D/g, "");

  cpf = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");

  cpfInput.value = cpf;
};

telInput.addEventListener("input", telMask);
cpfInput.addEventListener("input", cpfMask);

submitData();
