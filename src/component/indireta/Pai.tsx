import React, { useState }from 'react';
import { View, Text } from 'react-native';
import Filho from './Filhos'
import style from '../style';

function func(props:{}) {

    const [num,setNum] = useState(0);
    const [texto,setTexto] = useState('');

    function exibirValor(numero:number, texto:string){
        setNum(numero)
        setTexto(texto)
    }


    return (
        <>
          <Text style={style.txtG}>{texto} {num}</Text>
          <Filho min={1} max={200} funcao={exibirValor}/>
        </>
    )
} 

export default func;