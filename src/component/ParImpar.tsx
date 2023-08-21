import React, {useState}from "react";
import { Text, Platform, View} from "react-native";
import style from "./style";

function func(props:{num:number}){

    // if (props.num % 2 === 0){
    //     return(
    //         <View>
    //             <Text>O resultado é: </Text>
    //             <Text style={style.txtG}>Par</Text>
    //         </View>
    //     )
    // } else {
    //     return(
    //         <View>
    //             <Text>O resultado é: </Text>
    //             <Text style={style.txtG}>Impar</Text>
    //          </View>
    //     )
    // }

    return(
        <View>
            <Text>O resultado é: </Text>
            {
                props.num % 2 ===0 ? <Text style={style.txtG}>Par</Text>
                                   : <Text style={style.txtG}>Impar</Text>

            }
        </View>
    )






}


export default func;