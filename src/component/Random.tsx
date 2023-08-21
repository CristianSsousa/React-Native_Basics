import React from "react";
import { Text } from "react-native";
import style from "./style";

export default function (props: {sts:number, end:number}) {

    let num:number =  Math.floor(Math.random() * (props.end - props.sts + 1)) + props.sts;
    console.warn(props)  
    return <Text style={style.txtG}>{Math.floor(num)}</Text>



}                