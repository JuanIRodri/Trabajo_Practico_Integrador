import prompt_sync from "prompt-sync";
import { menu , menuOpcionesVehiculos, menuEditar} from "./opcionesMenu.js";
import { seleccionMostrar,volverAlMenu  } from "./seleccionesMenu.js";
import { agregarElemento,mostarElemento,borrarElemento } from "./manejador_arreglo.js";
import { seleccionEditar } from "./editarElemento.js";
const prompt = prompt_sync();



function seleccionMenu(opcion) {
    
    console.clear();
    menu();
    let eleccion = 0;
    while (opcion != 0) {
        
        
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
                let eleccionVehiculo = Number(prompt("Ingrese una opcion: "));
                menuEditar();
                let eleccionElemento = Number(prompt("Ingrese una opcion: "));
                seleccionEditar(eleccionVehiculo,2,eleccionElemento,1000);  
                opcion = volverAlMenu();
                

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

export { seleccionMenu};