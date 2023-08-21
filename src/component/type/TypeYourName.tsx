import React, {useState}from "react";
import { Text, TextInput, View} from "react-native";
import style from "../style";

function func(props: any){  
    const [ nome , setNome]= useState('Teste')

    return(
        <View>
            <Text>{nome}</Text>
            <TextInput
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={(nome => setNome(nome))}
            />

        </View>
        
    )

}


export default func;