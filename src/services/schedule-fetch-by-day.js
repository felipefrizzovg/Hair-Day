import { apiConfig } from './api-config.js'
import dayjs from 'dayjs'

export async function scheduleFetchByDay({ date }) {
  try {
    // Fazendo a requisição
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    // Converte para json
    const data = await response.json()

    // Filtra os agendamentos do dia selecionado
    const dailySchedules = data.filter(( schedule ) => dayjs(date).isSame(schedule.when, "day"))

    return dailySchedules
  } catch (e) { 
    console.log(e)
    alert("Não foi possivel buscar os agendamentos do dia selecionado")
  }
}