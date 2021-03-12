import React from 'react';
import { Text, TextInput, StyleSheet, Platform, View } from 'react-native';

const Formulario = () => { 
    return(
        <>
            <View style={ styles.formulario }>
                <View>
                     <TextInput
                     placeholderTextColor="#777"
                     placeholder="Ciudad"/>
                </View>
            </View>
        </>
    )
};


const styles = StyleSheet.create({
    formulario : {
        marginTop: 100
    }
})

export default Formulario;