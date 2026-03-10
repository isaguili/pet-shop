import { fetchSchedulesByDate } from "../services/fetch-schedules-by-date.js";
import { loadAvailableHours } from "./available-hours.js";

const dateInput = document.getElementById("schedule-date");
const hourInput = document.getElementById("schedule-hour");

dateInput.addEventListener("change", async () => {
  updateAvailableHours();
  hourInput.removeAttribute("focus")
  hourInput.value = ""
});

//atualiza horários disponíveis para agendamento no formulário
export async function updateAvailableHours() {
  let schedules = await fetchSchedulesByDate(dateInput.value);
  loadAvailableHours(schedules, dateInput.value);
}
