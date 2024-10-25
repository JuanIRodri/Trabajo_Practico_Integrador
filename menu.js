import prompt_sync from "prompt-sync";
import { menu , menuOpcionesVehiculos, menuEditar} from "./opcionesMenu.js";
import { volverAlMenu  } from "./seleccionesMenu.js";
import { seleccionMostrar } from "./mostrarElemento.js";
import { seleccionEditar } from "./editarElemento.js";
import {seleccionVehiculoBorrar} from "./borrarElementos.js";
import { seleccionVehiculoAgregar } from "./agregarElementos.js";
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
                seleccionMostrar(eleccion);               
                opcion = volverAlMenu();
                
            break;

            case 2:

                console.log("¿Qué tipo de vehiculo desea agregar?");
                menuOpcionesVehiculos();
                eleccion = Number(prompt("Ingrese una opcion: "));
                seleccionVehiculoAgregar(eleccion);   
                opcion = volverAlMenu();
                menuAgregar();                

            break;

            case 3:

                console.log("¿Qué tipo de vehiculo desea editar?");
                menuOpcionesVehiculos();
                let eleccionVehiculo = Number(prompt("Ingrese una opcion: "));
                seleccionMostrar(eleccionVehiculo);
                console.log("Seleccione la id a editar");
                let id=Number(prompt("ID: "));
                menuEditar();
                let eleccionElemento = Number(prompt("Ingrese una opcion: "));
                console.log("Ingrese un nuevo valor");
                let nuevoValor = prompt("Nuevo valor: ");
                seleccionEditar(eleccionVehiculo,id,eleccionElemento,nuevoValor);  
                opcion = volverAlMenu();
                

            break;
            case 4:

                console.log("¿Qué tipo de vehiculo desea borrar?");
                menuOpcionesVehiculos();
                eleccion = Number(prompt("Ingrese una opcion: "));
                seleccionVehiculoBorrar(eleccion);  
                opcion = volverAlMenu();

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