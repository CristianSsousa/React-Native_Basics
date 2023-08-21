import React from "react";
import { View, Text } from "react-native";
import style from "./style";


function Title(props:{principal:string, secundario:string}){


    return(
        <View>
            <Text style={style.txtG}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </View>
    );
}


export default Title;

