import React from 'react'

class Classe extends React.Component{
    constructor(props){
    super(props)    

    }
  render(){
    return(
        <div>
            <h1>Primeiro componente de classe</h1>
            <p>Canal: {this.props.canal}</p>
            <p>Curso: {this.props.curso}</p>

        </div>
        
    
    )
  }
}
export default Classe



/**/