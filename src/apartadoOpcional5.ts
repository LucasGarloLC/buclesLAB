import { Pacientes, NumeroPacientesPorEspecialidad } from "./apartado.tools";

export const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  const pacientesDeMedicoFamilia: Pacientes[] = [];
  const pacientesDePediatría: Pacientes[] = [];
  const pacientesDeCardiologia: Pacientes[] = [];

  for (let i = 0; pacientes.length > i; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesDePediatría.push(pacientes[i]);
    }
    if (pacientes[i].especialidad === "Medico de familia") {
      pacientesDeMedicoFamilia.push(pacientes[i]);
    }
    if (pacientes[i].especialidad === "Cardiólogo") {
      pacientesDeCardiologia.push(pacientes[i]);
    }
  }

  return {
    medicoDeFamilia: pacientesDeMedicoFamilia.length,
    pediatria: pacientesDePediatría.length,
    cardiologia: pacientesDeCardiologia.length,
  };
};
