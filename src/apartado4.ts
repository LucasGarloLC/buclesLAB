import { Pacientes } from "./apartado.tools";

export const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let pacientesDePediatría = false;

  for (let i = 0; pacientes.length > i; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesDePediatría = true;
    }
  }

  return pacientesDePediatría;
};
