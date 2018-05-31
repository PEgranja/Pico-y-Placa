
//FUNCION CONSULTAR

function Consultar() {
    var valorPlaca = document.getElementById("placa").value.charAt(document.getElementById("placa").value.length-1),
        dia = document.getElementById("dia").value,
        hora = document.getElementById("hora").value;
    
    valorPlaca = parseInt(valorPlaca);
    
    if(isNaN(valorPlaca)){
        alert("Debe ingresar un número de placa válido");
        document.getElementById("placa").value = "";
    } else if((valorPlaca === 1 || valorPlaca === 2) && dia === "LUNES" && (hora === "7H00 - 9H30" || hora === "16H00 - 19H30")) {
        document.getElementById("respuesta").innerHTML = "TU VEHICULO NO PUEDE ESTAR CIRCULANDO";
    } else if((valorPlaca === 3 || valorPlaca === 4) && dia === "MARTES" && (hora === "7H00 - 9H30" || hora === "16H00 - 19H30")) {
        document.getElementById("respuesta").innerHTML = "TU VEHICULO NO PUEDE ESTAR CIRCULANDO";
    } else if((valorPlaca === 5 || valorPlaca === 6) && dia === "MIERCOLES" && (hora === "7H00 - 9H30" || hora === "16H00 - 19H30")) {
        document.getElementById("respuesta").innerHTML = "TU VEHICULO NO PUEDE ESTAR CIRCULANDO";
    } else if((valorPlaca === 7 || valorPlaca === 8) && dia === "JUEVES" && (hora === "7H00 - 9H30" || hora === "16H00 - 19H30")) {
        document.getElementById("respuesta").innerHTML = "TU VEHICULO NO PUEDE ESTAR CIRCULANDO";
    } else if((valorPlaca === 9 || valorPlaca === 0) && dia === "VIERNES" && (hora === "7H00 - 9H30" || hora === "16H00 - 19H30")) {
        document.getElementById("respuesta").innerHTML = "TU VEHICULO NO PUEDE ESTAR CIRCULANDO";
    } else {
        document.getElementById("respuesta").innerHTML = "TU VEHICULO SI PUEDE ESTAR CIRCULANDO";
    }
    
    
    //PRUEBAS UNITARIAS
    
    test("Prueba si el número de placa no es válido", function () {
        equal(isNaN(valorPlaca), true, "El número de placa no es válido");
        });
    
    test("Prueba si el número de placa es válido", function () {
        equal(isNaN(valorPlaca), false, "El número de placa es válido");
        });
    
}


    
    






