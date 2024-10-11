
const menu = () => {

    console.log("1)Mostrar elementos");    
    console.log("2)Para agregar un elemento");
    console.log("3)Para actualizar un elemento");
    console.log("4)Para borrar un elemento");
    console.log("0)Para salir del programa");

}
const menuMostrar = () =>{
    console.log("¿Qué tipo de vehiculo desea ver?");
    console.log("1)Para ver los autos");
    console.log("2)Para ver las camionetas");
    console.log("3)Para ver las motos");
}

const menuAgregar= () => {

    console.log("¿Que desea agregar?");    
    console.log("1)Para agregar una moto");
    console.log("2)Para agregar un auto");
    console.log("3)Para agregar una camioneta");

}

const menuEditar = () =>{
    console.log("¿Que desea actualizar?");    
    console.log("1)Para actualizar la marca de un vehiculo");
    console.log("2)Para actualizar el modelo de un vehiculo");
    console.log("3)Para actualizar la placa de un vehiculo");
    console.log("4)Para actualizar el lugar de estacionamiento de un vehiculo");
    console.log("5)Para actualizar el tipo de un vehiculo");
    console.log("6)Para actualizar la hora de entrada de un vehiculo");
    console.log("7)Para actualizar la hora de salida de un vehiculo");
    console.log("8)Para actualizar el costo de un vehiculo");

}

const menuBorrar = () =>{

    
}


export { menu , menuAgregar, menuEditar, menuMostrar, menuBorrar};