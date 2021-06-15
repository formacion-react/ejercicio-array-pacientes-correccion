const pacientes = [
  {
    paciente: {
      nombre: "Manuel",
      edad: 25,
      sexo: "H",
    },
    diasIngresado: 3,
    dieta: "Baja en fibra",
  },
  {
    paciente: {
      nombre: "Marta",
      edad: 56,
      sexo: "M",
    },
    diasIngresado: 5,
    dieta: "Diabetes",
  },
  {
    paciente: {
      nombre: "Julia",
      edad: 38,
      sexo: "M",
    },
    diasIngresado: 1,
    dieta: "Sin sal",
  },
  {
    paciente: {
      nombre: "Esteban",
      edad: 14,
      sexo: "H",
    },
    diasIngresado: 3,
    dieta: "Diabetes",
  },
  {
    paciente: {
      nombre: "Arturo",
      edad: 19,
      sexo: "H",
    },
    diasIngresado: 2,
    dieta: "Baja en fibra",
  },
  {
    paciente: {
      nombre: "Isabel",
      edad: 63,
      sexo: "M",
    },
    diasIngresado: 6,
    dieta: "Sin sal",
  },
];

const resumenPacientes = (datosPacientes) => {
  const nMayoresEdad = datosPacientes.filter(
    ({ paciente: { edad } }) => edad >= 18
  ).length;
  const nHombresDiabeticos = datosPacientes.filter(
    ({ dieta, paciente: { sexo } }) =>
      sexo.toUpperCase() === "H" && dieta === "Diabetes"
  ).length;
  const totalDiasIngreso = datosPacientes.reduce(
    (acumulador, { diasIngresado }) => acumulador + diasIngresado,
    0
  );
  const mediaEdadMujeres = datosPacientes
    .filter(({ paciente: { sexo } }) => sexo.toUpperCase() === "M")
    .reduce(
      (acumulador, { paciente: { edad } }, i, mujeres) =>
        acumulador + edad / mujeres.length,
      0
    );
  const resumen = {
    nPacientes: datosPacientes.length,
    nMayoresEdad,
    nHombresDiabeticos,
    totalDiasIngreso,
    mediaEdadMujeres,
  };
  return resumen;
};

console.log(resumenPacientes(pacientes));
