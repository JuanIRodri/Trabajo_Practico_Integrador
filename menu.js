import prompt_sync from "prompt-sync";
import { menu ,menuAgregar, menuMostrar, menuEditar, menuBorrar } from "./opcionesMenu.js";
import {selecionMostrar  } from "./selecionesMenu.js";
const prompt = prompt_sync();

menu();

function seleccionMenu(opcion) {

    while (opcion != 0) {
        
        opcion = Number(prompt("Ingrese una opcion: "));

        switch (opcion) {

            case 1:

                menuMostrar();
                const eleccionMostrar = Number(prompt("Ingrese una opcion"));
                selecionMostrar(eleccionMostrar);
                menu();
            break;

            case 2:

                menuAgregar();                

            break;

            case 3:

                menuEditar();
            break;
            case 4:
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