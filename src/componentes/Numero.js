import React from 'react'

export default function Numero(props){

    return(
        <p>
        <p>Valor do state num em Numero: {props.num}</p>
        <button onClick={()=> props.setNum(props.num+10)}> Soma 10</button>
        </p>
    )
}



//   <button onClick={()=>props.setNum(props.num+10)}> Soma 10</button>

//no App
/*
import React, {useState} from 'react'
import numero from './componentes/numero'


export default function App(){

  const [num, setNum]= useState(20)

 

  return(
    
    <>
    <numero num = {num} setNum={setNum}/>
    </>
  )

}

// sem o componente funciona assim:

import React, {useState} from 'react'
import numero from './componentes/numero'


export default function App(){

  const [num, setNum]= useState(20)
return(
    
    <>
    <p>Valor do state num em App:{num}</p>
    <button onClick={()=>setNum(num+10)}> Soma 10 </button>
    </>







 //let n1=36 -> se eu só criar variável ao invés de const,  não vai mudar nada pq estou chamando e renderizando o state na função e nao variável. preciso aplicar alteração só no state


//<button onClick={()=>n1=100}>100</button> Se fizer somente assim não renderiza pq não incluí o state

//<numero num = {num} setNum={setNum}/>*/