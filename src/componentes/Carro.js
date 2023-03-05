import React from 'react'

export default class Carro extends React.Component{
    constructor(props){
    super(props) 
    this.modelo='HRV'   
    this.state={ //criar state
        ligado:false,//valor boleano
        velAtual:0, //valor inteir0
    }
    this.ld=this.ligarDesligar.bind(this) 
}
    ligarDesligar(){
   // this.setState({ligado:!this.state.ligado})
   this.setState(
    function (state){   //forma mais segura 
        return{
            ligado:!state.ligado
        }
    }

)           
    }
            
     acelerar(){
        this.setState(
            (state,props)=>(
                {velAtual:state.velAtual + props.fator}
            )
        )
    }

 componentDidMount(){ //qdo foi criado , chama após o render
    console.log('O carro foi criado')
 }
 componentDidUpdate(){
    console.log('O carro foi atualizado')
 } //chama após o render mass toda vez q atualiza o componente

 componentWillUnmount(){
    console.log('O carro foi removido')
 }

 //chama após o render qdo  o componente for rentirado do DOM


  render(){
    return(
        <div>
            <h1>Meu Carro</h1>
            <p>Modelo: {this.modelo}</p>
            <p>Ligado: {this.state.ligado ?'Sim' : 'Não'}</p>
            <p>Ve.Atual: {this.state.velAtual}</p>
            <button onClick={this.ld}>
            {this.state.ligado ? 'Desligar Carro' : 'Ligar Carro'}</button>
          <button onClick={()=>this.acelerar()}>Acelerar</button>
            
        </div>
        
        
    
    )
  }
}
 



/*
(cria variável)this.modelo='Golf', 
(chama variável)<p>Modelo:{this.modelo}</p>
(forma de tetorno para valor boleano)<p>Ligado/Desligado{this.state.ligado ?'Sim' : 'Não'}</p>
seState - muda valor do estado 
manipular um state:
this.setState({ligado:true}) renderizar
<button onClick={()=>this.ligar()}>Ligar Carro</button>
em situações de calculo e props pode ser q o state não atualize primeiro 






*/