import React, {useState}from "react";
import { View, StyleSheet} from "react-native";
import Quad from './Quadrado'

function func(props: any){

    return(
        <View style={style.FlexV4}>
            <View style={style.V0}></View>
            <View style={style.V1}></View>
            <View style={style.V2}></View>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4:{
        flex: 1,
        width: 100,
        backgroundColor: '#000'
    },
    V0:{
        backgroundColor: '#36c9a7',
        height: 300
    },
    V1:{
        backgroundColor: '#ff801a',
        flexGrow: 1
    },
    V2:{
        backgroundColor: '#dd22c1',
        flexGrow: 2
        
    }
})




export default func;