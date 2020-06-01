const fs = require('fs');

let listadoPorHacer = [];

// Guardar en un achivo json
const guardarDB = () => {

    // convertir un objeto a JSON
    let data = JSON.stringify(listadoPorHacer);
    // guardar la data en un archivo
    fs.writeFile(`db/data.json`, data, (err) => {

        if (err) {
            throw new Error('No se pudo grabar', err);
        }
    });
};

// Leer el archivo json
const cargarDB = () => {
    try {
        // lyendo datos del archivo json
        listadoPorHacer = require('../db/data.json'); // Convierte un objeto automaticamente
    } catch (error) {
        listadoPorHacer = [];
    }
};


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
};

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    // findIndex captura el index del arreglo a buscar
    let index = listadoPorHacer.findIndex(
        tarea => {
            return tarea.descripcion === descripcion;
        }
    );

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(
        tarea => {
            return tarea.descripcion === descripcion;
        }
    );
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
};

module.exports = {
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrar
};