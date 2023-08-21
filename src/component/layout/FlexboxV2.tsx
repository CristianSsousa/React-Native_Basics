import React, {useState}from "react";
import { View, StyleSheet} from "react-native";
import Quad from './Quadrado'

function func(props: any){

    return(
        <View style={style.FlexV2}>
            <Quad color='#ff801a'/>
            <Quad color='#50d1f6'/>
            <Quad color='#dd22c1'/>
            <Quad color='#8312ed'/>
            <Quad color='#36c9a7'/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2:{
        flex: 1,
        width: '100%',
        backgroundColor: '#000',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
    }
})




export default func;