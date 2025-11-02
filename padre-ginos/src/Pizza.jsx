import React from 'react';
let counter = 0;
export const Pizza = (props) => {
    counter = Date.now();

    return (
        <div className="pizza" onClick={()=>{
            console.log('h1');
            }}
        >
            <h1>{props.name} {counter}</h1>
            <p>{props.description}</p>
            <img src={props.image} alt={props.name}/>
        </div>
    )
};