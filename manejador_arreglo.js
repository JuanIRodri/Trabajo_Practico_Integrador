
function agregarElemento(arreglo) {
    arreglo.push(arreglo);
    
}
function mostarElemento(arreglo) {
    console.table(arreglo);
    
}

function editarElemento(id, arreglo, propiedad, nuevoValor) {
    for (let i = 0; i < arreglo.length; i++) {
         if (arreglo[i].id == id) {
             // Aquí se edita la propiedad específica del objeto encontrado
             if (arreglo[i].hasOwnProperty(propiedad)) {
                 arreglo[i][propiedad] = nuevoValor;
                 return arreglo[i]; // Retorna el objeto editado
             } else {
                 return `Propiedad ${propiedad} no encontrada en el objeto con id ${id}`;
             }
         }
    }
    return `No se encontró el objeto con id ${id}`;
}


function borrarElemento(params) {
    
}
export {agregarElemento, mostarElemento, editarElemento, borrarElemento};