import React,{useState} from 'react'

export default function fpeso({p,sp}){
   
        return(
          <div>
            <label>
              Peso:
              <input type="text" value={p} onChange={(e)=> sp(e.target.value)}/>
            </label>
          </div>
              )}
