import React from "react"
import { SafeAreaView, Text, View, StyleSheet} from "react-native"

import First from "./component/First";
import X, { Comp1, Comp2 } from "./component/Multi"
import MinMax from "./component/MinMax";
import Random from "./component/Random";
import Title from "./component/Title";
import Buttons from "./component/Button";
import Counter from "./component/Counter"
import Pai from "./component/direta/Pai"
import Pais from "./component/indireta/Pai"
import Counterv2 from "./component/counter/Counterv2"
import Dif from "./component/Dif/Dif" 
import Par from "./component/ParImpar"
import Familia from "./component/relacao/Familia"
import Membro from "./component/relacao/Membro"
import Usuario from './component/UsuarioLogado'
import Lista from './component/products/ListaProduto'
import Listas from './component/products/ListaProdutosv2'
import Type from './component/type/TypeYourName'
import Quad from './component/layout/Quadrado'
import FlexV1 from './component/layout/FlexboxV1'
import FlexV2 from './component/layout/FlexboxV2'
import FlexV3 from './component/layout/FlexboxV3'
import FlexV4 from './component/layout/FlexboxV4'
import Mega from './component/mega/Mega'

export default function App() {

   
    
    return (
    <SafeAreaView style={style.App}>

        <Mega qtdeNumeros={12} />


        
        
        {/*
        <FlexV4 />
        <FlexV3 />
        <FlexV2 />
        <FlexV1 />

        <Type />

        <Listas /> // V2
        <Lista />

        <Usuario nome='Gui' email= 'gui@gui.com'/>
        <Usuario nome='Ana'/>
        <Usuario email= 'Carlos@gui.com'/>
        <Usuario nome='' email= 'gui@gui.com'/>




        <Familia >
            <Membro nome="Bia" sobrenome="Arruda"></Membro>
            <Membro nome="Carlos" sobrenome="Arruda"></Membro>
        </Familia>
        <Familia >
            <Membro nome="Fla" sobrenome="Vicent"></Membro>
            <Membro nome="Gio" sobrenome="Vicent "></Membro>
        </Familia>




        <Par num={3}/>
        <Dif></Dif>
        <Counterv2></Counterv2>
        <Pais />
        <Pai /> // Direto
        <Counter inicial={100} pass={10} />
        <Buttons  />
        <Title principal="Cadastro Produto" secundario=" Tela de Cadastro do Produto" />
        <MinMax param={2} param2={45} />
        <Random sts={1} end={10}/>
        <X />
        <Comp1 />
        <Comp2 />
        <First /> */}
    </SafeAreaView>
      

    );
          
}

const style = StyleSheet.create({
    App:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    Input:{

    }
})

/*
function App():JSX.Element{

    return (
        
        <SafeAreaView>
          
        </SafeAreaView>
    );
}


export default App*/