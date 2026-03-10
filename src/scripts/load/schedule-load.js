import { fetchSchedulesByDate } from "../services/fetch-schedules-by-date";

const schedulePeriods = document.querySelectorAll(".schedule-period ul");
const morningPeriod = document.querySelector("#morning-period ul");
const afternoonPeriod = document.querySelector("#afternoon-period ul");
const nightPeriod = document.querySelector("#night-period ul");

//atualizar quadro de agendamentos
export async function updateSchedule(date) {
  try {
    const schedules = await fetchSchedulesByDate(date);
    loadSchedules(schedules);
    hideEmptyPeriods();
  } catch (error) {
    alert("Não foi possível atualizar o quadro de agendamentos.")
  }
}

//carregar o quadro de agendamentos
function loadSchedules(schedules) {
  clearSchedules();

  try {
    //para cada agendamento, criar cartão correspondente
    schedules.forEach((item) => {
      const scheduleCard = document.createElement("li");
      scheduleCard.classList.add("schedule-card", "flex", "flex-column");

      //adiciona o id do elemento
      scheduleCard.setAttribute("data-id", item.id);

      //cria header do cartão
      const cardHeader = document.createElement("div");
      cardHeader.classList.add("card-header");

      //cria elementos do header
      const hour = document.createElement("strong");
      hour.classList.add("hour");
      hour.textContent = item.hour;
      const petName = document.createElement("strong");
      petName.classList.add("pet-name");
      petName.textContent = item.petName;
      const petOwner = document.createElement("span");
      petOwner.classList.add("pet-owner");
      petOwner.textContent = ` / ${item.petOwner}`;

      //descrição do serviço
      const service = document.createElement("p");
      service.classList.add("service");
      service.textContent = item.service;

      //botão de remover
      const removeBtn = document.createElement("button");
      removeBtn.classList.add("remove-btn");
      removeBtn.textContent = "Remover agendamento";

      //monta o cartão
      scheduleCard.appendChild(cardHeader);
      cardHeader.appendChild(hour);
      cardHeader.appendChild(petName);
      cardHeader.appendChild(petOwner);
      scheduleCard.appendChild(service);
      scheduleCard.appendChild(removeBtn);

      appendToPeriod(item, scheduleCard);
    });
  } catch (error) {
    alert(
      "Erro ao carregar os horários, tente novamente mais tarde.",
    );
  }
}

//esconde os períodos sem agendamento
function hideEmptyPeriods() {
  schedulePeriods.forEach((period) => {
    if (period.innerHTML.trim() === "") {
      period.parentElement.classList.add("hidden");
    } else {
      period.parentElement.classList.remove("hidden");
    }
  });
}

//insere cartão no período correspondente
function appendToPeriod(item, scheduleCard) {
  const hour = Number(item.hour.split(":")[0]);

  if (hour < 12) {
    morningPeriod.appendChild(scheduleCard);
  } else if (hour < 18) {
    afternoonPeriod.appendChild(scheduleCard);
  } else {
    nightPeriod.appendChild(scheduleCard);
  }
}

//limpa agendamentos para evitar duplicidade e atualizar o quadro de horários
function clearSchedules() {
  morningPeriod.innerHTML = "";
  afternoonPeriod.innerHTML = "";
  nightPeriod.innerHTML = "";
}
