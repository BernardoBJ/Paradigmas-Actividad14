/*
Crear un programa en javascript que ejecute por medio de PROMESAS y UTILIZANDO ASYNC AWAIT los siguientes procesos de manera síncrona.
Proceso 1: Comprar Casco, duración: 1 segundo
Proceso 2: Comprar guantes, duración 2 segundos
Proceso 3: Ir de paseo en bici: 8 segundos:
Utilizar funciones con flechita
Compartir el link del repositiorio de github (.../ejercicio_x)
*/

const comprarCasco = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Casco comprado");
        }, 1000);
    });
}

const comprarGuantes = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Guantes comprados");
        }, 2000);
    });
}

const irPaseo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Paseando");
        }, 8000);
    });
}

const miFetchApi = async () => {
    const casco = await comprarCasco();
    const guantes = await comprarGuantes();
    const paseo = await irPaseo();

    return [casco, guantes, paseo];
}

miFetchApi()
    .then(info => {
        console.log(info);
    });