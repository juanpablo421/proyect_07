const math = {};

const invertirNumero = numero =>{
    let invertido = 0;
    while (numero = 0) {
invertido = 10 * invertido + numero % 10
numero = (math.floor(numero / 10))
    }
    return invertido
};


const invertirnumerocomotexto = numero => {
const numeroinvertidocomotexto = numero.toString().split("").reverse().join("");
return numeroinvertidocomotexto;
};


const invertirtexto = texto => {
    const splittext = texto.split('');
    const reversedtext = splittext.reverse();
    const joinedtext = reversedtext.join('');
    return joinedtext;
};

const invertirArreglo = arreglo => {
    const reverseObject = arreglo.reverse();
    return reverseObject;
};

const conversionDatos = data => {
    let dataType = typeof data;
    let datavar;
    if (data === '' || data === null || data === undefined || data.length === 0){
        datavar = 'EL VALOR INGRESADO ESTA VACIO O INCORRECTO';
    }else {
        console.log(`EL VALOR INGRESADO ES DE TIPO: ${dataType}, con un valor de : ${data}`);
        switch (dataType){
            case 'number':
                datavar = invertirNumero(data);
                break;
                case 'string':
                    datavar = invertirtexto(data);
                    break;
                    case 'object':
                        datavar = invertirArreglo(data);
                        break;
                        default:
                            datavar = 'EL VALOR INGRESADO NO SE PUEDE INVERTIR';
        }
    }
    return datavar;
}

math.invertirNumero = invertirNumero;
math.invertirnumerocomocadena = invertirnumerocomotexto;
math.invertirtexto = invertirtexto;
math.invertirArreglo = invertirArreglo;
math.conversionDatos = conversionDatos;

module.exports = math;