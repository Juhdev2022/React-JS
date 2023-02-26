import React,{useState} from 'react' 
import Calcular from './componentes/Calcular'
import Result from './componentes/Result'
import Altura from './componentes/Altura'
import Peso from './componentes/Peso'
import Tabela from './componentes/Tabela'
import fresultado from './componentes/Result'


   export default function App(){
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [resultado, setResultado] = useState(0)

    
    return (
      <>
         <Peso p={peso} sp={setPeso} />
         <Altura a={altura} sa={setAltura}/><br/>
         <Calcular p={peso} a={altura} sr={setResultado}/><br/>
         <Result  r={resultado}/>
         <Tabela/>
       
      </>
    );
  }

