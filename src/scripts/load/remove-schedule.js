import { removeSchedule } from "../services/remove-schedule.js";
import { updateSchedule } from "./schedule-load.js";

const cards = document.querySelectorAll(".cards");
const selectedDate = document.getElementById("date");

cards.forEach((card) => {
  card.addEventListener("click", async (event) => {
    if (event.target.classList.contains("remove-btn")) {
      const item = event.target.closest("li");
      //seleciona data-id atribuído
      const { id } = item.dataset;

      if (id) {
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento?",
        );

        //remover id selecionado (await para update funcionar)
        if (isConfirm) {
          await removeSchedule(id);
          updateSchedule(selectedDate.value);
        }
      }
    }

  });
});
