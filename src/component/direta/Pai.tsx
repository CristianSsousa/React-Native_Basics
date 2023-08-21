import React, { useState }from 'react';
import { View, Text } from 'react-native';
import Style from '../style'

import Filho from './Filho'

function func(props:{}) {

    let x = 13
    let y = 10

    return (
        <>
          <Filho a={x} b={y}></Filho>
          <Filho a={x + 109} b={y + 200}></Filho>
        </>
    )
}


export default func;
