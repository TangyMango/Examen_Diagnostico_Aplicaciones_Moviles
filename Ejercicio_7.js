//7.	Crea una función llamada evaluateNumber que tome como parámetro y devuelva 
//      un mensaje que indique si el número es positivo, negativo o cero.
var num = 10;

function evaluateNumber(num) {
    switch (num) {
        case num>0:
            return "Positivo";
        
        case num<0:
            return "Negativo";

        default:
            return "Cero";

    }
}

evaluateNumber(num);