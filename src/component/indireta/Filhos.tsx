import React, { useState }from 'react';
import { View, Text, Button } from 'react-native';
import Style from '../style'

function func(props:{min:number,max:number,funcao: (numero: any, texto:string) => void;}) {

    function gerarNumero(min:number,max:number){
        const fator:number = max - min + 1
        return Math.floor(Math.random() * fator) + min;
    }



    return (
        <Button 
            title='Executar'
            onPress={function(){
                const n = gerarNumero(props.min,props.max)
                console.warn( n);
                props.funcao(n,'O valor é:' )
            }}
        
        />
    )
}

export default func;