import { seleccionMenu} from "./menu.js";
import prompt_sync from "prompt-sync";
const prompt = prompt_sync();

function volverAlMenu() {
    let opcion = 1;
    console.log("¿Desea volver al menu?");
    console.log("1)Para volver al menu");
    console.log("0)Para salir de la aplicacion");
    const eleccion = Number(prompt("Opcion elegida: "));
    
    if (eleccion == 1) {
        console.clear();
        seleccionMenu(opcion);

    }else{
        opcion = 0;
    }
}




export { volverAlMenu };