import { Pacientes } from "./apartado.tools.js";

export const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesDePediatría: Pacientes[] = [];
  for (let i = 0; pacientes.length > i; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesDePediatría.push(pacientes[i]);
    }
  }
  return pacientesDePediatría;
};

export const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesDePediatría: Pacientes[] = [];
  for (let i = 0; pacientes.length > i; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      pacientesDePediatría.push(pacientes[i]);
    }
  }
  return pacientesDePediatría;
};
