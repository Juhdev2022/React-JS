import React from 'react'
import Dados from './Props'

export default function Texto(){
    const i = '@juleaodev'
         const v = 'juleãoDEV'
    return(
        <>
         <h2>Este é o meu primeiro texto de componente!</h2>
         <p>Agora ninguém me segura!</p>
         <Dados Insta={i} Videos={v}/>

        </>
        
    )
}