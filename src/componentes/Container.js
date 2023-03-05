import React from 'react';

export default function Container (props){
    return(
        
        <div>
            <h1>My Container</h1>
            <p>Componente Filho:</p>
            {React.Children.map(props.children,child=>(<p>{child}</p>))}
        </div>
    );
}