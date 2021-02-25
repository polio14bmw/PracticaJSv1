/* Ejercicio dia de la semana */
/* Creamos variable para almacenar el dia de la semana */
let dia = prompt("Ingrese un dia de la semana");
/* Convertir lo que escriba el usuario en minusculas */
dia = dia.toLowerCase();
/* Validamos el dia si es entre semana o 
fin de semana */
if (dia == "lunes" || dia == "martes"  || dia == "miercoles" || dia == "miércoles" || dia == "jueves" || dia == "viernes" ) {
    alert("Es un dia entre semana");
} else {
    if (dia == "sabado" || dia == "sábado"|| dia == "domingo") {
        alert("Es un fin de semana");
    } else {
        alert("Porfavor ingresar un dia da la semana perra puta");
    }
}

/**
 * 1- Que pasa si no escriben nada
 * 2- Que pasa si usan mayusculas
 * 3- Si escribe otra cosa  que no sea lo solicitado
 * 4- Tildes
 */
