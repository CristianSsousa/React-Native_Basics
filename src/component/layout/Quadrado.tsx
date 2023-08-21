import React, {useState}from "react";
import { Text, View} from "react-native";


function func(props: any){
    const lado = props.lado || 50

    return(
        <View style={{
            height: lado,
            width: lado,
            backgroundColor: props.color || '#000'
        }}>

        </View>

    )
}





export default func;