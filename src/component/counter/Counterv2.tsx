import React, {useState}from "react";
import { Text } from "react-native";
import style from "../style";
import CounterDisplay from "./CounterDisplay"
import CounterButton from "./CounterButtons"


function func(props:{}){

    const [num, setNum] = useState(0);


    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)

    return(
        <>
            <Text style={style.txtG}>
                Contador
            </Text >
            <CounterDisplay num={num}/>
            <CounterButton inc={inc} dec={dec} />


        </>
    )



}


export default func;