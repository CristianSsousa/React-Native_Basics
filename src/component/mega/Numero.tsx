import React, {useState}from "react";
import { Text, Platform, View,StyleSheet} from "react-native";
import style from "../style";

function func(props: any){


    return(
        <View style={styles.Conteiner}>
            <Text style={[style.txtG, styles.Num]}>
                {props.num}
            </Text>
        </View>
    )






}


const styles = StyleSheet.create({
    Conteiner:{
        height: 50,
        width: 50,
        backgroundColor: '#000',
        margin: 5,
        borderRadius: 25
    },
    Num:{
        color: '#FFF'
    }

})

export default func;