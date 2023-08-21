import React, {useState}from "react";
import { Text, Platform} from "react-native";
import style from "../style";


function func(props:{}){
    if(Platform.OS === 'android'){
        return <Text style={style.txtG}> Android</Text >
    } else if (Platform.OS === 'ios'){
        return <Text style={style.txtG}> IOS</Text >
    } else {
        return <Text style={style.txtG}> Eita!</Text >
    }

            


}


export default func;