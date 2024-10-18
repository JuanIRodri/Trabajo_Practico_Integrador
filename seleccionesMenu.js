import { autos,motos,camionetas } from "./registroVehiculos.js";
import { seleccionMenu} from "./menu.js";
import prompt_sync from "prompt-sync";
const prompt = prompt_sync();

function seleccionMostrar(eleccion,mostrar) {
    
    switch (eleccion) {
        case 1:
            mostrar(motos);
        break;
        case 2:
            mostrar(autos);
        break;
        case 1:
            mostrar(camionetas);
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
        opcion = 0;
    }
}




export { seleccionMostrar, volverAlMenu };