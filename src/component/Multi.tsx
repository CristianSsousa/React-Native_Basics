import React from "react";
import { Text } from "react-native";
import Style from "./style";

export default function Comp(){
    return <Text style={Style.txtG}>Comp Oficial</Text>

}

function Comp1(){
    return <Text style={Style.txtG}>Comp1</Text>

}
function Comp2(){
    return <Text style={Style.txtG}>Comp2</Text>

}


export { Comp1, Comp2}