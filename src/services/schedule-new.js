import { apiConfig } from './api-config.js'

export async function scheduleNew({ id, name, when }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id,
        name,
        when
      })
    })
  } catch (e) {
    console.log(e)
    alert("Não foi possível realizar o agendamento. Tente novamente mais tarde...")
  }
}