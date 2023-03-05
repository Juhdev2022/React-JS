import React from 'react'

export default  function Nota(props){
    return(
        <div>
            <legend>Informe a nota:{props.num}</legend>
            <input type="number" value={props.notas} onChange={(e)=>props.setNotas(e, props.num)}/>
        </div>
    )

}