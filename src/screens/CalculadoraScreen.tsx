import React, { useEffect } from 'react'
import { Text, View } from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {

    const {limpiar, positivoNegativo, btnDelete, btnSumar, btnRestar, btnDMultiplicar, btnDividir, calcular, numeroAnterior, numero, armarNumero} = useCalculadora();

    useEffect(() => {
        SplashScreen.hide();
    }, [])
    return (
        <View style={styles.calculadoraContainer} >
            {
                ( numeroAnterior !== '0') &&(
                    <Text style={ styles.proceso } >{numeroAnterior} </Text>
                )
            }
            <Text 
               style={ styles.resultado } 
               numberOfLines={1}
               adjustsFontSizeToFit
            > {numero} </Text>

        {/* fila de botones */}
        <View style={styles.fila} >
            <BotonCalc text="C" accion={ limpiar } />
            <BotonCalc text="+/-" accion={ positivoNegativo } />
            <BotonCalc text="del" accion={ btnDelete } />
            <BotonCalc text="/" color="#ff9427" accion={ btnDividir } />
        </View>
        {/* fila de botones */}
        <View style={styles.fila} >
            <BotonCalc text="7" accion={ armarNumero } />
            <BotonCalc text="8" accion={ armarNumero } />
            <BotonCalc text="9" accion={ armarNumero } />
            <BotonCalc text="X" color="#ff9427" accion={ btnDMultiplicar } />
        </View>
        {/* fila de botones */}
        <View style={styles.fila} >
            <BotonCalc text="4" accion={ armarNumero } />
            <BotonCalc text="5" accion={ armarNumero } />
            <BotonCalc text="6" accion={ armarNumero } />
            <BotonCalc text="-" color="#ff9427" accion={ btnRestar }/>
        </View>
        {/* fila de botones */}
        <View style={styles.fila} >
            <BotonCalc text="1" accion={ armarNumero } />
            <BotonCalc text="2" accion={ armarNumero } />
            <BotonCalc text="3" accion={ armarNumero } />
            <BotonCalc text="+" color="#ff9427" accion={ btnSumar } />
        </View>
        {/* fila de botones */}
        <View style={styles.fila} >
            <BotonCalc text="0" accion={ armarNumero } ancho />
            <BotonCalc text="." accion={ armarNumero } />
            <BotonCalc text="=" color="#ff9427" accion={ calcular } />
        </View>
        
       
      
        </View>
    )
}
