import React, {useState}from "react";
import { Text, View, FlatList} from "react-native";
import style from "../style";
import produtos from "./product"

function func(props:any){

    

    const produtoRender = ({ item: p}) =>{
        return <Text>{p.id}) {p.nome} - R${p.preco}</Text>

    }

    return(
        <>
            <Text style={style.txtG}>Lista de Produtos</Text>
            <FlatList 
                data={produtos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={produtoRender}

            />
                

            <Text style={style.txtG}>Lista de Produtos</Text>
            <FlatList 
                data={produtos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item: p}) =>{
                    return <Text>{p.id}) {p.nome} - R${p.preco}</Text>
            
                }}

            />        

        </>
    )


}


export default func;