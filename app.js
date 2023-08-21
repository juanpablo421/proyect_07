require('colors');

const math = require('./proy_modules/math.js')

const main = async () => {
    console.log('hola sena cba\n'.red);
    const numeros = [4, 3, 568540, 689, 68495, 49632, 4643256];
    for (const numero of numeros){
        const invertidocomoNumero = math.invertirNumero(numero);
        const invertidocomocadena = math.invertirnumerocomocadena(numero);
        console.log("El numero '%s' es '%s' invertido como numero, y '%s' como cadena",
        numero, invertidocomoNumero, invertidocomocadena);

    }
    const textos = ['hola mundo', 'ficha 2798618', 'Analisis y Deasarrollo de Software']
    for(const texto of textos){
        const textoInvertido = math.invertirtexto(texto);
        console.log("El texto '%s' se invierte como '%s'", texto, textoInvertido);
    }
    const datos = [1234567, 'ADSO 2798618', [2798618, 'ADSO']]
    for(let dato of datos){
        const datoconvertido = math.conversionDatos(dato);
        console.log(`El resultado de conversion es: ${datoconvertido}`);
    }
}


main();