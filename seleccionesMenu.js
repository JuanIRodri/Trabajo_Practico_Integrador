import { agregarElemento,mostarElemento,editarElemento,borrarElemento } from "./manejador_arreglo.js";
import { autos,motos,camionetas } from "./registroVehiculos.js";
import { seleccionMenu} from "./menu.js";
import prompt_sync from "prompt-sync";
const prompt = prompt_sync();

function seleccionMostrar(eleccion) {
    
    switch (eleccion) {
        case 1:
            mostarElemento(autos);
        break;
        case 2:
            mostarElemento(camionetas);
        break;
        case 1:
            mostarElemento(motos);
        break;
    
        default:
            
        break;
    }

}

function volverAlMenu() {

    console.log("¿Desea volver al menu?");
    console.log("1)Para volver al menu");
    console.log("0)Para salir de la aplicacion");
    const eleccion = Number(prompt("Opcion elegida: "));
    
    if (eleccion == 1) {
        console.clear();
        seleccionMenu();

    }else{

        return 0;

    }

}




export { seleccionMostrar, volverAlMenu };