



/*export default function Dados(props){

    return(
        <section>
            <h1>Tutorial Passando variáveis por PROPS  </h1>
            <p>Instagram: {props.insta}</p>
            <p>GitHub: <a href=" https://github.com/Juhdev2022">{props.git}</a></p>
        </section>
    )
}

import React from "react";
import Dados from './Componenstes2/Dados'

export default function App(){

  return(
    <>
    <Dados insta={'@juleaodev'} git={'Juhdev2022'}/>
    </>
  )
}
______________
export default function Dados(props){

    return(
        <section>
            <h1>Tutorial:  Passando constantes por PROPS  </h1>
            <p>Instagram: {props.i}</p>
            <p>GitHub: <a href=" https://github.com/Juhdev2022">{props.g}</a></p>
        </section>
    )
}

export default function App(){
const i = '@juleaodev'
const g = 'Juhdev2022'
  return(
    <>
   <Dados i={'@juleaodev'} g={'Juhdev2022'}/>
    </>
  )
}
_______

export default function Dados(props){

    return(
        <section>
            <h1>Tutorial:  Passando funções por PROPS  </h1>
            <p>Instagram: {props.i()}</p>
            <p>GitHub: <a href=" https://github.com/Juhdev2022">{props.g()}</a></p>
        </section>
    )
}

export default function App(){
const i =()=>{
  return '@juleaodev'
}
const g =()=>{
  return 'Juhdev2022'
} 
  return(
    <>
   <Dados i={i} g={g}/>
    </>
  )
}

*/