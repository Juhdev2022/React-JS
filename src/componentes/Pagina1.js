import React from'react'

export default function Pagina1(props){
return(
  <>
  <div>
    <h1>Hi </h1>
    <h1>Fiz a volta para a página inicial sozinha :)</h1>
    <h3>(Exemplo de navegação entre telas) </h3>
    <button onClick={props.onVoltar}>Voltar</button>
  </div>

  </>
)
}
