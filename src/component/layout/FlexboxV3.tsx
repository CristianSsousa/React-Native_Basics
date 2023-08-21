import React, {useState}from "react";
import { View, StyleSheet} from "react-native";
import Quad from './Quadrado'

function func(props: any){

    return(
        <View style={style.FlexV2}>
            <Quad color='#ff801a' lado={20}/>
            <Quad color='#50d1f6' lado={30}/>
            <Quad color='#dd22c1' lado={40}/>
            <Quad color='#8312ed' lado={50}/>
            <Quad color='#36c9a7' lado={60}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 350,
        width: '100%',
        backgroundColor: '#000'
    }
})




export default func;