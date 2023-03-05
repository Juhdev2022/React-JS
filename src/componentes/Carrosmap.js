import React from 'react'

export default function Carrosmap(props ){

return(
   
  <ul>
    {props.carros.map((carro, index) =>(
      <li key={carro.index}>{index + 1}-{carro.categoria} {carro.modelo} - R${carro.preco}</li>
      ))}
    </ul>
  
)
  
}

