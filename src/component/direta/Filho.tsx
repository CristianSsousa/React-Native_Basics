import React, { useState }from 'react';
import { View, Text } from 'react-native';
import Style from '../style'

function func(props:{a:number, b:number}) {
    return (
        <>        
            <Text style={Style.txtG}>{props.a}</Text>
            <Text style={Style.txtG}>{props.b}</Text>
        </>

    )
}

export default func;