const opcion1 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
};

const opcion2 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    }
};

const opcion3 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Lista de las tareas por hacer'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    }
};
const opcion4 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Borra una tarea por hacer'
    }
};

const argv = require('yargs') // Importamos el paquete yargs
    .command('crear', 'Crear un elemento por hacer', opcion1)
    .command('actualizar', 'actualizar el estado completado de una tarea', opcion2)
    .command('listar', 'Lista todas las tareas por hacer', opcion3)
    .command('borrar', 'Borra una tarea de la lista por hacer', opcion4)
    .help()
    .argv;


module.exports = { // para que trabaje en cualquier lado
    argv
};