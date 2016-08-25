var horas;  
var pago;
var sueldo;
         
horas=prompt("Ingrese las horas de trabajo : ","");
pago=prompt("Ingrese el monto de pago : ","");
sueldo= (parseInt(horas) * parseInt(pago));

window.alert("El sueldo del trabajador es : " + sueldo);
	