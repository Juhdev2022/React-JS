/*import React, { useState,useEffect } from 'react'
import Pagina1 from './componentes/Pagina1'
import Pagina2 from './componentes/Pagina2'

export default function App(){

  const[pagina, setPagina]= useState (0)

useEffect(
  ()=>{
    const url=window.location.href
    const res=url.split('?')
    setPagina (res[1])
  })

  const linksPagina=(p)=>{
    if(p==1){
      window.open('http://localhost:3000?1','_self')
    }else if(p==2){
      window.open('http://localhost:3000?2','_self')
    }else if (p==0){
      window.open('http://localhost:3000/')
  }}

    const retornar=()=>{
      if(pagina==1){
        return<Pagina1 onVoltar={() => linksPagina(0)}/>
      } else if(pagina==2){
        return<Pagina2 onVoltar={() => linksPagina(0)}/>
    }else{
      return<div>
                <button onClick={()=>linksPagina(1)}>Pagina1</button>
                <button onClick={()=>linksPagina(2)}>Pagina2</button>

            </div>
         }}

         return(
          <>
          {retornar()}
          
          </>
         )
}*/