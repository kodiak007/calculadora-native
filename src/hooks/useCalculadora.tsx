import { useRef, useState } from "react";

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
    
    
    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');

    const ultimaOperacion = useRef<Operadores>()

    const limpiar = () =>{
        setNumero('0');
        setNumeroAnterior('0');
    }
    const armarNumero = ( numeroTexto: string) =>{
        //no acepatar dobnle punto solucion simplificada mostrada en las respuestas
        if(numeroTexto === '.' && numero.includes('.'))return;

        if( numero === '0' && numeroTexto !== '.'){
            setNumero( numeroTexto)
        }else{
            setNumero( numero + numeroTexto )
        }      

    }
    const positivoNegativo = () =>{
        if(numero.includes('-')){
            setNumero( numero.replace('-', ''))
        }else{
            setNumero( '-' + numero)
        }
    }

    const btnDelete = () =>{
        if( numero.length === 1 || (numero.length === 2 && numero.startsWith('-'))){
            setNumero('0')
        }else {            
            setNumero( numero.slice(0, - 1) )            
        }
    }

    const cambiarNumAnterior = () =>{
        if( numero.endsWith('.')){
            setNumeroAnterior( numero.slice(0,-1))
        }else{
            setNumeroAnterior( numero)
        }

        setNumero('0');
    }

    const btnDividir = () =>{
        cambiarNumAnterior()
        ultimaOperacion.current = Operadores.dividir;
    }
    const btnDMultiplicar = () =>{
        cambiarNumAnterior()
        ultimaOperacion.current = Operadores.multiplicar;
    }
    const btnSumar = () =>{
        cambiarNumAnterior()
        ultimaOperacion.current = Operadores.sumar;
    }
    const btnRestar = () =>{
        cambiarNumAnterior()
        ultimaOperacion.current = Operadores.restar;
    }
    const calcular = () =>{
        if(numeroAnterior === '0')return;
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        switch ( ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${ num1 + num2}`);
                break;
            case Operadores.restar:
                setNumero(`${ num2 - num1}`);
                break;
            case Operadores.multiplicar:
                setNumero(`${ num1 * num2}`);
                break;
            case Operadores.dividir:
                setNumero(`${ num2 / num1}`);
                break;
              
                }
                setNumeroAnterior('0');
    }
    
    return{limpiar, positivoNegativo, btnDelete, btnSumar, btnRestar, btnDMultiplicar, btnDividir, numeroAnterior, numero, armarNumero, calcular};
}
