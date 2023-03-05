import React from 'react'

export default class Calcular extends React.Component {
   
constructor(props){
   super(props)
 
}

calc = () => {
  const { peso, altura, setResultado } = this.props;
  const imc = peso / (altura * altura);
  setResultado(imc);
}

render() {
  return (
    <div>
      <button onClick={this.calc}>Calcular</button>
    </div>
  )
}
}