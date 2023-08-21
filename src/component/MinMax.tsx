import React from "react";
import { Text } from "react-native";
import style from "./style";



function Min (props: {param:number, param2:number}) {

    
    console.warn(props);

    return (
        <Text style={style.txtG}>

            O Valor {props.param} é maior que o valor 
                    {props.param2}!
            
        </Text>
    )
}


export default Min;