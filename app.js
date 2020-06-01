// Tres comandos a ejecutar
// 1.-node app crear -d "Pasear al perro"
// 2.-node app listar
// 3.-node app actualizar -d "Pasear al perro" -c true


const argv = require('./config/yargs').argv; // para meter datos por comandos
// console.log(argv);
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors'); // npm i colors


// Configuraciones necesarias para poder ejecutar los comandos crear listar actualizar
let comando = argv._[0];

switch (comando) {
    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case "listar":
        let listado = porHacer.getListado();
        for (const tarea of listado) {
            console.log('======Por hacer========'.green);
            console.log(tarea.descripcion);
            console.log("Estado: ", tarea.completado);
            console.log('======================='.green);
        }

        break;
    case "actualizar":
        let actualizado = porHacer.actualizar(argv.d, argv.c);
        console.log(actualizado);

        break;

    case "borrar":
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('Comando no es reonocido');
        break;
}