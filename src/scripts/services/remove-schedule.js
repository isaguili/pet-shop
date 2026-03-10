import { apiConfig } from "./api-config.js";

//recebe id como parâmetro e faz a requisição para deletar o agendamento correspondente
export async function removeSchedule(id) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(
        "Erro ao cancelar o agendamento, tente novamente mais tarde.",
      );
    }

    alert("Agendamento cancelado com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Não foi possível cancelar o agendamento.");
  }
}
