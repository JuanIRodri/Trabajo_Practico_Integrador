import { agregarElemento,mostarElemento,editarElemento,borrarElemento } from "./manejador_arreglo.js";
import { autos, motos, camionetas } from "./registroVehiculos.js";
function selecionMostrar(eleccion){
    switch (eleccion) {
        case 1:
            mostarElemento(autos);
        break;
        case 2:
            mostarElemento(camionetas);
        break;
        case 3:
            mostarElemento(motos);
        break;
            
        default:

            break;
    }
}





export{selecionMostrar};