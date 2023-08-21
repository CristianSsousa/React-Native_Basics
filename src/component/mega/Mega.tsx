import React, {Component}from "react";
import { Button, Text, TextInput, View } from "react-native";
import style from "../style";
import MegaNum from './Numero'

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }


    // constructor(props:any){
    //     super(props)

    //     this.state = {
    //         qtdeNumeros: this.props.qtdeNumeros
    //     }
    // }


    alterarQtdeNumero(qtde:number){
        this.setState({qtdeNumeros: +qtde})
    }

    gerarNumeroNaoContido = (nums) => {
        const novo:number  = Math.floor(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros(){
        const numeros: [] = Array(this.state.qtdeNumeros)
            .fill()
            .reduce((n: []) => [...n, this.gerarNumeroNaoContido(n)],[])
            .sort((a,b) => a - b )
        this.setState({numeros })
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map( num =>{
            return <MegaNum key={num} num={num}/>
        })
    }

    render() {
        return (
          <>
            <Text style={style.txtG}>Gerador de Mega-Sena</Text>
            <TextInput
              keyboardType={"numeric"}
              style={{ borderBottomWidth: 1 , textAlign: 'center' , marginBottom: 10}}
              placeholder="Qtde de Numeros"
              value={this.state.qtdeNumeros.toString()} // Converting to string
              onChangeText={(qtde) => this.alterarQtdeNumero(qtde)}
            />
            <Button title="Gerar" onPress={() => this.gerarNumeros()} />
            <View style={{
                marginTop : 10,
                flexDirection: 'row',
                justifyContent:"center",
                flexWrap: 'wrap'
            
            }}>
                {this.exibirNumeros()}
            </View>
            
          </>
        );
      }
    }