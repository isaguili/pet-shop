import { apiConfig } from "./api-config.js";

//busca os horários agendados em um dia específico
export async function fetchSchedulesByDate(date) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules?date=${date}`);
    const data = await response.json();

    //corrigindo comportamento de mockAPI, se data retornar "Not found", transformamos em um array vazio
    const schedules = data === "Not found" ? [] : data;

    //sort() percorre o array e organiza os horários em ordem crescente ao comparar as strings de horário usando localeCompare
    const sortedSchedules = [...schedules].sort((a, b) => a.hour.localeCompare(b.hour));
    return sortedSchedules;
  } catch (error) {
    alert(
      "Erro ao carregar os horários. Por favor, tente novamente mais tarde.",
    );
  }
}
