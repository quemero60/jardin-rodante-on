var fecha = new Date ();

var dia_semana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",  
];

var mes = [
    "Enero",
    "Febredo",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Setiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

var dame_fecha = "Hoy " + dia_semana [fecha.getDay()] + ",  " + fecha.getDate() + " de " + mes [fecha.getMonth()] + " del " + fecha.getFullYear();
document.write("<p>" + dame_fecha + "</p>")