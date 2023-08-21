import React, { JSXElementConstructor } from "react";
import { Text } from "react-native"; 
import Style from "./style";

const first: JSXElementConstructor<any> = () => {
    
    console.warn('Opa')
    
    return(


        <Text style={Style.txtG}>Primeiro</Text>


    )
    

}
export default first