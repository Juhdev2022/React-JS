import React,{useState} from 'react'

export default function fcalcular({p,a,sr}){

        const calc=()=>{
            sr(p/(a*a))
        }
        return(
          <div>
            <button onClick={calc}>Calcular</button>
          </div>
        )
    
     }
