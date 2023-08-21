import React, {useState}from "react";
import { Text, View} from "react-native";
import style from "../style";
import produtos from "./product"

function func(){
    function obsterLista(){
        return produtos.map(p => {
            return  <Text key={p.id}>{p.id} || {p.nome} - R${p.preco}</Text>
        })
    }

    return(
        <>

            {/* <Text style={style.txtG}>Lista de Produtos</Text>
            {produtos.map(p => {
                return  <Text key={p.id}>{p.id} || {p.nome} - R${p.preco}</Text>
            })} */}
            
            <Text style={style.txtG}>Lista de Produtos</Text>
            {obsterLista()}

        </>
    )


}


export default func;