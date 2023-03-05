import React,{useState} from 'react'

export default function faltura({a,sa}){
    
        return(
          <div>
            <label>
              Altura:
              <input type="text" value={a} onChange={(e)=> {sa(e.target.value)}}/>
            </label>
          </div>
        )}
       