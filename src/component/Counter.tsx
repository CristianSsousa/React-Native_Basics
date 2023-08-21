import React, { useState }from "react";
import { Text, Button, View, StyleSheet, StyleProp } from "react-native";
import style from "./style";


function Count(props:{inicial:number, pass:number}){


    //let number = props.inicial;
    const [number, setNumero] = useState(props.inicial)



    function inc(){
        setNumero(number + props.pass); 
    } 

    function dec(){
        setNumero(number - props.pass);
    }

    return (
        <>
            <Text style={style.txtG}>{number}</Text>
            <View style={Estilo.buttons} >
                <Button title="+" onPress={inc}></Button>
                <Button title="-" onPress={dec}></Button>
            </View>
            
        </>
    )
}

const Estilo = StyleSheet.create({
    buttons:{
        flexDirection: "row"
    }
})


export default Count;