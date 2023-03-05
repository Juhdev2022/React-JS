import React from "react";
import axios from 'axios'

export default class ListaCarros extends React.Component{
   
  state={
    carros:[]
  } 

    componentDidMount(){
      axios.get('https://api-reactexemplo1.juleaodev.repl.co/').then(res=>{
        const dadosCarros=res.data
          this.setState({carros:dadosCarros})
      })
    }
    render(){
      return(
        <div>
          {this.state.carros.map(
            carro=> <div key={carro.id}>{carro.id} - {carro.marca} - {carro.modelo}</div>
          )}
        </div>
      )
    }
}

