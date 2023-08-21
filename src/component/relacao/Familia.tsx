import React, {useState}from "react";
import { Text, Platform, View} from "react-native";
import style from "../style";

function func(props: any){
    return(
        <>
            <Text style={style.txtG}>Membros da Familia: </Text>
            {props.children}
        </>
    )

}


export default func;