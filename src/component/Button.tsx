import React from "react";
import { Button } from "react-native";


function Btn(props:{}) {

    console.warn(props)
    function executar(){
        console.warn('Exec #1')
    }

    return(
        <>
            <Button 
                title="Executar #1"
                onPress={executar}
            />
             <Button 
                title="Executar #2"
                onPress={function(){
                    console.warn('Exec #2')
                }}
            />
        </>
    )
}



export default Btn;  