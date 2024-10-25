import { autos, motos, camionetas } from "./registroVehiculos.js";
import prompt_sync from "prompt-sync";
const prompt = prompt_sync();

function seleccionVehiculoBorrar(eleccion) {
    let idAborrar = "";

    switch (eleccion) {
        case 1:
            console.table(motos);
            idAborrar = Number(prompt("Ingrese la ID del vehiculo que desea borrar: "));
            borrarElemento(idAborrar, motos);
            break;
        case 2:
            console.table(autos);
            idAborrar = Number(prompt("Ingrese la ID del vehiculo que desea borrar: "));
            borrarElemento(idAborrar, autos);
            break;
        case 3:
            console.table(camionetas);
            idAborrar = Number(prompt("Ingrese la ID del vehiculo que desea borrar: "));
            borrarElemento(idAborrar, camionetas); 
            break;

        default:
            console.log("Ingreso no valido");
            seleccionVehiculoBorrar(eleccion);

            break;
    }
}
function borrarElemento(idBorrar, arre) {

    let index = arre.findIndex(arre => arre.id === idBorrar);
    if (index !== -1) {
        arre.splice(index, 1);
        console.log("Vehiculo eliminado. Lista actualizada:");
        console.table(arre);
    } else {
        console.log("Vehiculo no encontrado.");
    }

}


export { seleccionVehiculoBorrar }