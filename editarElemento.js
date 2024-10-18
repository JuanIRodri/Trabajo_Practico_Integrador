import { autos, motos, camionetas } from "./registroVehiculos.js";
function seleccionEditar(eleccion, id, propiedad,valor) {

    switch (eleccion) {
        case 1:
            editarElemento(id, motos, seleccionPropiedad(propiedad),valor);
            break;
        case 2:
            editarElemento(id, autos, seleccionPropiedad(propiedad),valor);
            break;
        case 3:
            editarElemento(id, camionetas, seleccionPropiedad(propiedad),valor);
            break;

        default:

        break;
    }

}

function seleccionPropiedad(propiedad) {

    switch (propiedad) {
        case 1:
            return "placa";
        case 2:
            return "marca";
        case 3:
            return "modelo";
        case 4:
            return "lugarDeEstacionamiento";
        case 5:
            return "tipoVehiculo";
        case 6:
            return "horaEntrada";
        case 7:
            return "horaSalida";
        case 8:
            return "costo";
    }

}

function editarElemento(id, arreglo, propiedad, nuevoValor) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i].id == id) {
            // Aquí se edita la propiedad específica del objeto encontrado
            if (arreglo[i].hasOwnProperty(propiedad)) {
                arreglo[i][propiedad] = nuevoValor;
            } else {
                console.log(`Propiedad ${propiedad} no encontrada en el objeto con id ${id}`);
                
            }
        }
    }
    console.log( `No se encontró el objeto con id ${id}`);

}

export { seleccionEditar }