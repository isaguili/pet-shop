import dayjs from "dayjs";

const dateInput = document.getElementById("schedule-date");
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//define data de agendamento como atual e só permite agendamentos para data atual ou futura
dateInput.value = inputToday;
dateInput.min = inputToday;
