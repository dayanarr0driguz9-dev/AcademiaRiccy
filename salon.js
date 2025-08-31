document.addEventListener("DOMContentLoaded", () => {
  const numeroWhatsApp = "50431804540"; // <-- cambia por tu número con código de país

  // BOTONES DE INFORMACIÓN DE TRABAJOS
  const botones = document.querySelectorAll(".info-btn");
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const trabajo = boton.getAttribute("data-trabajo");
      const mensaje = `Hola, quiero información sobre ${trabajo}`;
      const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, "_blank");
    });
  });

  // FORMULARIO DE RESERVA
  const formCita = document.getElementById("form-cita");
  formCita.addEventListener("submit", (e) => {
    e.preventDefault();

    const fecha = new Date(document.getElementById("fecha").value);
    const hora = document.getElementById("hora").value;

    if (!fecha || !hora) {
      alert("Por favor selecciona fecha y hora.");
      return;
    }

    const diaSemana = fecha.getUTCDay(); // 0=Dom, 5=Viernes
    const [h, m] = hora.split(":").map(Number);

    // VALIDACIÓN DE VIERNES
    if (diaSemana === 5) {
      alert("Los viernes el salón está cerrado.");
      return;
    }

    // VALIDACIÓN DE HORARIOS
    let valido = false;
    if (diaSemana >= 1 && diaSemana <= 4) { // Lunes a Jueves
      valido = (h >= 8 && (h < 17 || (h === 17 && m === 0)));
    } else if (diaSemana === 6) { // Sábado
      valido = (h >= 8 && (h < 17 || (h === 17 && m === 0)));
    } else if (diaSemana === 0) { // Domingo
      valido = (h >= 8 && (h < 16 || (h === 16 && m === 0)));
    }

    if (!valido) {
      alert("La hora seleccionada está fuera del horario de atención.");
      return;
    }

    // ENVÍO A WHATSAPP
    const mensaje = `Hola, quiero agendar una cita el ${fecha.toLocaleDateString()} a las ${hora}. ¿Podrían confirmar disponibilidad?`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  });
});