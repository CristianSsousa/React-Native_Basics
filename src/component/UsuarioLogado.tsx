import React, {useState}from "react";
import { Text, Platform, View} from "react-native";
import style from "./style";
import If from "./if"
function func(usuario:any){

    return(
        <>
            {/* <If teste={usuario && Object.keys(usuario).length !== 0}>
                <Text style={style.txtG}>Usuario Logado</Text>
                <Text style={style.txtG}>{usuario.nome} - {usuario.email}
                </Text>
            </If> */}
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={style.txtG}>Usuario Logado</Text>
                <Text style={style.txtG}>{usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
    )


}


export default func;