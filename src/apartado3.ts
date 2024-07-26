import { Pacientes } from "./apartado.tools";

export const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesDeMedicoFamilia: Pacientes[] = [];
  for (let i = 0; pacientes.length > i; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientes[i].especialidad = "Medico de familia";
      pacientesDeMedicoFamilia.push(pacientes[i]);
    }
  }
  return pacientesDeMedicoFamilia;
};
