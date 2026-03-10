import { openingHours } from "../services/opening-hours.js";
import dayjs from "dayjs";

const select = document.querySelector("select");

//checar horários disponíveis na data selecionada no formulário
export async function loadAvailableHours(schedules, date) {
  select.innerHTML = "";

  //checa os horários indisponíveis
  const unavailableHours = schedules.map((schedule) => schedule.hour);
  //checa os horários disponíveis, comparando os horários de funcionamento com os horários indisponíveis e se o horário já passou
  const availableHours = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":");
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());
    const available = !unavailableHours.includes(hour) && !isHourPast;

    return {
      hour,
      available,
    };
  });

  //preenche o select com os horários disponíveis
  availableHours.forEach(({ hour, available }) => {
    if (available) {
      const hourOption = document.createElement("option");
      hourOption.value = hour;
      hourOption.textContent = hour;
      select.appendChild(hourOption);
    }
  });
}
