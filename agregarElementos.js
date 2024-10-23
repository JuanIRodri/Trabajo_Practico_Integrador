import { autos,motos,camionetas } from "./registroVehiculos.js";
import prompt_sync from "prompt-sync";
const prompt = prompt_sync();

function seleccionVehiculoAgregar(eleccion) {
    switch (eleccion) {
        case 1:
            agregarElemento(motos);
            break;
        case 2:
            agregarElemento(autos);
            break;
        case 3:
            agregarElemento( camionetas);
            break;

        default:

        break;
    }    
}
function agregarElemento(arreglo){
    const nuevoArre={
        id:"",
        placa: "",
        marca: "",
        modelo: "",
        lugarDeEstacionamiento:"",
        horaEntrada: "",
        horaSalida: "",
        costo: ""
    };
    
    nuevoArre.placa =prompt("Agregue la placa: ");
    nuevoArre.marca=prompt("Agregue la marca: ");
    nuevoArre.modelo=prompt("Agregue el modelo: ");
    nuevoArre.lugarDeEstacionamiento=prompt("Agregue el lugar de estacionamiento: ");
    nuevoArre.horaEntrada=prompt("Agregue la hora de entrada: ");
    nuevoArre.horaSalida=prompt("Agregue la hora de salida: ");
    nuevoArre.costo=Number(prompt("Agregue el costo: "));
  
    nuevoArre.id = arreglo.length + 1;
    arreglo.push(nuevoArre);
}
export{seleccionVehiculoAgregar}


