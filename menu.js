import prompt_sync from "prompt-sync";
import { menu ,menuMostrar} from "./opcionesMenu.js";
import { seleccionMostrar,volverAlMenu  } from "./seleccionesMenu.js";
const prompt = prompt_sync();



function seleccionMenu(opcion) {

    console.clear();
    menu();

    while (opcion != 0) {
        
        opcion = Number(prompt("Ingrese una opcion: "));

        switch (opcion) {

            case 1:

                console.log("¿Qué tipo de vehiculo desea ver?");
                menuMostrar();
                const eleccionMostrar = Number(prompt("Ingrese una opcion: "));
                seleccionMostrar(eleccionMostrar);               
                opcion = volverAlMenu();
                
            break;

            case 2:

                console.log("¿Qué tipo de vehiculo desea agregar?");
                menuMostrar();

                opcion = volverAlMenu();
                menuAgregar();                

            break;

            case 3:

                console.log("¿Qué tipo de vehiculo desea editar?");
                menuMostrar();

                opcion = volverAlMenu();
                menuEditar();

            break;
            case 4:
                console.log("¿Qué tipo de vehiculo desea borrar?");
                menuMostrar();

                opcion = volverAlMenu();
                menuBorrar();
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