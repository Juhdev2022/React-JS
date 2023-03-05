import React from 'react'

export default class Altura extends React.Component {
    constructor(props){
        super(props)
     
     }
     render(){
    
        return(
          <div>
            <label>
              Altura:
              <input type="text" value={this.props.altura} onChange={(e)=> this.props.setAltura(e.target.value)}/>
            </label>
          </div>
        )
    }
}
       