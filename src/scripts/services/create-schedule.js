import { apiConfig } from "./api-config";

//recebe um objeto com os dados do agendamento e faz a requisição para criar um novo agendamento
export async function createSchedule({
  id,
  petOwner,
  petName,
  phone,
  service,
  hour,
  date,
}) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        petOwner,
        petName,
        phone,
        service,
        hour,
        date,
      }),
    });

    alert("Agendamento realizado com sucesso.");
  } catch (error) {
    console.log(error);
    alert("Não foi possível agendar, tente mais tarde.");
  }
}
