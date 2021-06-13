## Ejercicio 1 - Arrays

Declara una variable que almacene este array:

```
[
    {
        paciente: {
            nombre: 'Manuel',
            edad: 25,
            sexo: 'H'
        },
        diasIngresado: 3,
        dieta: 'Baja en fibra'
    },
    {
        paciente: {
            nombre: 'Marta',
            edad: 56,
            sexo: 'M'
        },
        diasIngresado: 5,
        dieta: 'Diabetes'
    },
    {
        paciente: {
            nombre: 'Julia',
            edad: 38,
            sexo: 'M'
        },
        diasIngresado: 1,
        dieta: 'Sin sal'
    },
    {
        paciente: {
            nombre: 'Esteban',
            edad: 14,
            sexo: 'H'
        },
        diasIngresado: 3,
        dieta: 'Diabetes'
    },
    {
        paciente: {
            nombre: 'Arturo',
            edad: 19,
            sexo: 'H'
        },
        diasIngresado: 2,
        dieta: 'Baja en fibra'
    },
    {
        paciente: {
            nombre: 'Isabel',
            edad: 63,
            sexo: 'M'
        },
        diasIngresado: 6,
        dieta: 'Sin sal'
    }
];
```

Haz una función que reciba un array como éste y que devuelva un objeto con la siguiente forma:

```
{
    nPacientes: (número de pacientes),
    nMayoresEdad: (número de pacientes mayores de edad),
    nHombresDiabeticos: (número de pacientes hombres con dieta para diabetes),
    totalDiasIngreso: (suma de los días de ingreso de todos los pacientes),
    mediaEdadMujeres: (edad media de las pacientes mujeres)
}
```

__IMPORTANTE__: No puedes usar ninguna de estas estructuras:
- for, for ... of, for ... in, forEach(), while, do .. while