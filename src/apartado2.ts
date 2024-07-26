import { Pacientes } from "./apartado.tools";

export const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

  for (let i = 0; pacientes.length > i; i++) {
    if (
      pacientes[i].temperatura > 39 &&
      pacientes[i].frecuenciaCardiaca > 100
    ) {
      activarProctolo = true;
    }
  }

  return activarProctolo;
};
