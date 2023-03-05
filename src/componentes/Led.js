import React from 'react'
import LedVerde from './imgs/verde.png'
import LedVerm from './imgs/verm.png'

export default function Led(props){ 

return(
  <>
  <img style={{width:'50px'}} src={props.ligado?LedVerde:LedVerm}/>
  <button onClick={()=>props.setLigado(!props.ligado)}>
    {props.ligado?'Desligar':'Ligar'}
    </button>
</>
)
}