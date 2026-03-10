import { checkPhoneNumber } from "./validation.js";
import { createSchedule } from "../services/create-schedule.js";
import { closeForm } from "./open-close-form.js";
import { updateSchedule } from "../load/schedule-load.js";
import {updateAvailableHours} from "./input-hour.js";


//elementos do formulário
const form = document.querySelector("form");
const petOwnerInput = document.getElementById("pet-owner");
const petNameInput = document.getElementById("pet-name");
const phoneInput = document.getElementById("phone");
const serviceInput = document.getElementById("service");
const dateInput = document.getElementById("schedule-date");
const hourInput = document.getElementById("schedule-hour");

const selectedDate = document.getElementById("date");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    //captura dados para novo agendamento
    const id = String(new Date().getTime());
    const petOwner = petOwnerInput.value.trim().replace(/\s+/g, " ");
    const petName = petNameInput.value.trim().replace(/\s+/g, " ");
    const service = serviceInput.value.trim().replace(/\s+/g, " ");

    const phone = phoneInput.value;
    checkPhoneNumber(phoneInput.value);
    const date = dateInput.value;
    const hour = hourInput.value;

    //envia dados para servidor
    await createSchedule({ id, petOwner, petName, phone, service, hour, date });

    //atualiza formulário
    clearInputs();
    closeForm();
    await updateAvailableHours();

    //atualiza agenda
    selectedDate.value = dateInput.value;
    updateSchedule(selectedDate.value);
  } catch (error) {
    if (error instanceof ValidationErrors) {
      alert(error.message);
    } else {
      alert(
        "Não foi possível realizar o agendamento. Tente novamente, por favor.",
      );
      console.log(error);
    }
  }
});

//limpa campos do formulário
function clearInputs() {
  petOwnerInput.value = "";
  petNameInput.value = "";
  serviceInput.value = "";
  phoneInput.value = "";
  hourInput.value = "";
}
