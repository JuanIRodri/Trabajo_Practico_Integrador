import prompt_sync from "prompt-sync";
import { menu , menuOpcionesVehiculos} from "./opcionesMenu.js";
import { seleccionMostrar,volverAlMenu  } from "./seleccionesMenu.js";
import { agregarElemento,mostarElemento,editarElemento,borrarElemento } from "./manejador_arreglo.js";
const prompt = prompt_sync();



function seleccionMenu(opcion) {

    console.clear();
    menu();

    while (opcion != 0) {
        let eleccion = 0;
        
        opcion = Number(prompt("Ingrese una opcion: "));

        switch (opcion) {

            case 1:

                console.log("¿Qué tipo de vehiculo desea ver?");
                menuOpcionesVehiculos();
                eleccion = Number(prompt("Ingrese una opcion: "));
                seleccionMostrar(eleccion,mostarElemento);               
                opcion = volverAlMenu();
                
            break;

            case 2:

                console.log("¿Qué tipo de vehiculo desea agregar?");
                menuOpcionesVehiculos();
                eleccion = Number(prompt("Ingrese una opcion: "));
                seleccionMostrar(eleccion,agregarElemento);     
                opcion = volverAlMenu();
                menuAgregar();                

            break;

            case 3:

                console.log("¿Qué tipo de vehiculo desea editar?");
                menuOpcionesVehiculos();
                eleccion = Number(prompt("Ingrese una opcion: "));
                seleccionMostrar(eleccion,editarElemento);  
                opcion = volverAlMenu();
                menuEditar();

            break;
            case 4:
                console.log("¿Qué tipo de vehiculo desea borrar?");
                menuOpcionesVehiculos();
                eleccion = Number(prompt("Ingrese una opcion: "));
                seleccionMostrar(eleccion,borrarElemento);  
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