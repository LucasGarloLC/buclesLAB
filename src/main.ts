import { pacientes } from "./apartado.tools";
import {
  obtenPacientesAsignadosAPediatria,
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios,
} from "./apartado1";
import { activarProtocoloUrgencia } from "./apartado2";
import { reasignaPacientesAMedicoFamilia } from "./apartado3";
import { HayPacientesDePediatria } from "./apartado4";
import { cuentaPacientesPorEspecialidad } from "./apartadoOpcional5";

// Apartado 1
console.log(obtenPacientesAsignadosAPediatria(pacientes));
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

// Apartado 2
console.log(activarProtocoloUrgencia(pacientes));

// Apartado 3
console.log(reasignaPacientesAMedicoFamilia(pacientes));

// Apartado 4
console.log(HayPacientesDePediatria(pacientes));

// Apartado 5
console.log(cuentaPacientesPorEspecialidad(pacientes));
