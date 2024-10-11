import prompt_sync from "prompt-sync";
import { agregarElemento } from "./manejador_arreglo.js"
import { autos,camionetas,motos } from "./registroVehiculos.js";
import { menu ,menu2 } from "./opcionesMenu.js";

const prompt = prompt_sync();

menu();

function seleccionMenu(opcion) {

    while (opcion != 0) {
        
        opcion = Number(prompt("Ingrese una opcion: "));

        switch (opcion) {

            case 1:

                console.log("--------Autos---------");                
                console.log(autos);

                console.log("--------Camionetas---------");
                console.log(camionetas);

                console.log("--------Motos---------");
                console.log(motos);
                
            break;

            case 2:

                menu2();                

            break;

            case 3:

                console.log("hola desde opcion 3");

            break;

            default:
            
            if (opcion != 0) {

                console.log("Numero no valido, ingrese otro");

            }

            break;

        }

    }
    
}

export { seleccionMenu };