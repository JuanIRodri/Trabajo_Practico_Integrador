import { autos,motos,camionetas } from "./registroVehiculos.js";

function seleccionMostrar(eleccion) {
    switch (eleccion) {
        case 1:
            mostarElemento(motos);
            break;
        case 2:
            mostarElemento(autos);
            break;
        case 3:
            mostarElemento(camionetas);
            break;

        default:

        break;
    }    
}

function mostarElemento(arreglo) {
    console.table(arreglo);
    
}

export {seleccionMostrar};