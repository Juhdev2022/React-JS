import React from 'react'

export default class Resultado extends React.Component{
constructor(props){
    super(props)
}

render(resultado){

    return(
        <div>
          <p>Resultado: {this.props.resultado.toFixed(2)}</p>
        </div>
      )
     }
    }
/*Além disso, no método render do componente Resultado, você precisa acessar o valor da prop "resultado" e não o parâmetro "r". Para corrigir isso, você pode substituir {r.toFixed(2)} por {this.props.resultado.toFixed(2)}. Isso garantirá que o valor correto seja exibido no componente Resultado.*/