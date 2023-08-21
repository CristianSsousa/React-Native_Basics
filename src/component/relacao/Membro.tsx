import React, {useState}from "react";
import { Text, Platform, View} from "react-native";
import style from "../style";

function func(props:{nome:string, sobrenome:string}){
    return(
        <Text>{props.nome} {props.sobrenome}</Text>
    )

}


export default func;