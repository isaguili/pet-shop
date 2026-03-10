import { apiConfig } from "./api-config.js";

//busca os horários agendados em um dia específico
export async function fetchSchedulesByDate(date) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules?date=${date}`);
    const data = await response.json();

    //sort() percorre o array e organiza os horários em ordem crescente ao comparar as strings de horário usando localeCompare
    const sortedData = [...data].sort((a, b) => a.hour.localeCompare(b.hour));
    return sortedData;
  } catch (error) {
    alert(
      "Erro ao carregar os horários. Por favor, tente novamente mais tarde.",
    );
  }
}
