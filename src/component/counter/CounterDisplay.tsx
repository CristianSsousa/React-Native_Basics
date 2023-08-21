import React, {useState}from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import style from "../style";


function func(props:{num:number}){


    return(
        <SafeAreaView style={styles.Display}>
            <Text style={[style.txtG, styles.DisplayText]}>
                {props.num}
            </Text>
        </SafeAreaView>
    )



}

const styles = StyleSheet.create({
    Display:{
        backgroundColor: '#000',
        padding: 20,
        width: 300,
        
    },
    DisplayText: {
        color: '#FFF'
    }
})




export default func;