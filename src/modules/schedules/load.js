import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js"

// Seleciona o input de data
const selectedDate = document.getElementById("date")
export async function schedulesDay() {
  // Obtem a data do input
  const date = selectedDate.value

  // Buscar na api os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date })
  console.log(dailySchedules)

  // Renderiza as horas disponíveis
  hoursLoad({ date })
}