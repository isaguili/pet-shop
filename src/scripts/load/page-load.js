import dayjs from "dayjs";
import {updateSchedule} from "./schedule-load"
import {updateAvailableHours} from "../form/input-hour.js"

const selectedDate = document.getElementById('date');
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");
//seleciona a data atual para o input
selectedDate.value = inputToday

//atualizar agendamentos ao carregar página
document.addEventListener("DOMContentLoaded", async () => {
  updateSchedule(inputToday);
  updateAvailableHours();
});

//atualiza agendamentos quando usuário altera a data
selectedDate.addEventListener('change', async () => {
  updateSchedule(selectedDate.value)
})

