const periods = document.querySelectorAll('.period');

// Gera evento de click para cada lista (manhã tarde e noite)
periods.forEach((period) => {
  // Captura o evento de click na lista
  period.addEventListener('click', (e) => {
    if (e.target.classList.contains("cancel-icon")){
      // Obtem a li pai do elemento clicado
      const item = e.target.closest("li");
      const { id } = item.dataset

      if (id) {
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento")
        if (isConfirm) {
          console.log("REMOVER")
        }
      }

    }
  })
})