import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#37343b',
    
  },

  calculadoraContainer:{
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-end'
  },

  resultado: {
      color: '#adaab1',
      fontSize: 60,
      textAlign: 'right',
      marginBottom: 10
  },

  proceso:{
    color: '#78767b',
    fontSize: 30,
    textAlign: 'right',
  },

  fila:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },

  boton:{
      height: 80,
      width: 80,
      backgroundColor: '#37343b',
      borderRadius: 60,
      elevation: 14,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10
  },

  botonText:{
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    right: -3,
    fontSize: 30,
    fontWeight: 'bold',
  }
});
