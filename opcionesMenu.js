
const menu = () => {

    console.log("1)Mostrar elementos");    
    console.log("2)Para agregar un elemento");
    console.log("3)Para actualizar un elemento");
    console.log("4)Para borrar un elemento");
    console.log("0)Para salir del programa");

}

const menuOpcionesVehiculos= () => {
  
    console.log("1)Para moto");
    console.log("2)Para auto");
    console.log("3)Para camioneta");

}

const menuEditar = () =>{

    console.log("¿Que desea actualizar?");    
    console.log("1)Para actualizar la placa de un vehiculo");
    console.log("2)Para actualizar el marca de un vehiculo");
    console.log("3)Para actualizar la modelo de un vehiculo");
    console.log("4)Para actualizar el lugar de estacionamiento de un vehiculo");
    console.log("5)Para actualizar la hora de entrada de un vehiculo");
    console.log("6)Para actualizar la hora de salida de un vehiculo");
    console.log("7)Para actualizar el costo de un vehiculo");

}



export { menu , menuOpcionesVehiculos, menuEditar};