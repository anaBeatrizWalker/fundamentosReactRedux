//Representa a aplicação de todos os Componentes

import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default function App(){
    return (
        <div id="app">
            <h1>Fundamentos React</h1>
            <Fragmento />
            <ComParametro 
                titulo="Situação do Aluno" 
                aluno="Pedro" 
                nota={9.5}/>
            <Primeiro></Primeiro>
        </div>
    )
}