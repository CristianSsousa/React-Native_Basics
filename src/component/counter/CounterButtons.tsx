import React, {useState}from "react";
import { Text, Button, View, StyleSheet } from "react-native";

function Func(props:{inc: (numero: any) => void; dec: (numero: any) => void;}){

    return(
        <View style={styles.Buttons}>
            <Button title="+" onPress={props.inc}/>
            <Button title="-" onPress={props.dec}/>

        </View>
    )



}


const styles = StyleSheet.create({
    Buttons:{
        flexDirection: "row",
    },
    Btn:{
        width: 150
    }
})

export default Func;