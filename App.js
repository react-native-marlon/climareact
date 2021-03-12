import React, { useState } from 'react';
import { StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Formulario from './components/Formulario'

const App = () => {
  
  const [ busqueda, guardarBusqueda ] = useState({
    ciudad: '',
    pais: ''
  });

  const oncultarTeclado = () => {
    Keyboard.dismiss();
  }
  return(
    <>
    <TouchableWithoutFeedback
    onPress={ () => oncultarTeclado() }
    >
      <View style={ styles.app }>
        <View style={ styles.contenido }>
          <Formulario
          busqueda = {busqueda}
          guardarBusqueda = {guardarBusqueda}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
    app: {
      flex: 1,
      backgroundColor: 'rgb(71,149,212)',
      justifyContent: 'center'
    },
    contenido: {
      marginHorizontal: '2.5%'
    }
});


export default App;