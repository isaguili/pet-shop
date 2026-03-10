import { updateAvailableHours } from "../form/input-hour.js";

const form = document.querySelector("form");
const openFormBtn = document.getElementById("open-form");
const closeFormBtn = document.getElementById("close-form");
const schedule = document.getElementById("schedule");
const headerApp = document.querySelector("#app header");

//botão para abrir formulário
openFormBtn.addEventListener("click", () => {
  openForm();
  updateAvailableHours();
});

//botão para fechar formulário
closeFormBtn.addEventListener("click", (event) => {
  closeForm();
});

function openForm() {
  form.classList.remove("form-closed");
  openFormBtn.classList.add("blur");
  schedule.classList.add("blur");
  headerApp.classList.add("blur");
}

export function closeForm() {
  form.classList.add("form-closed");
  openFormBtn.classList.remove("blur");
  schedule.classList.remove("blur");
  headerApp.classList.remove("blur");
}
