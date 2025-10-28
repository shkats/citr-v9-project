import React from 'react';
import { createRoot } from 'react-dom';

const pizza = (props) => {
    return React.createElement("p", {},  props.description)  
}

const App = () =>  {
    return React.createElement(
        "div",
        {},
        [
          React.createElement("h1", {}, "Padre Gino's"),
          React.createElement(pizza, {
              name: "Pepporni Pizza",
              description: "Mozzarella Cheese, Pepperoni"
          }),
          React.createElement(pizza, {
            name: "American cheese Pizza",
            description: "cheese"
        }),
        React.createElement(pizza, {
            name: "Hawaii Pizza",
            description: "Mozzarella Cheese, Pepperoni"
        }),
        React.createElement(pizza, {
            name: "Chicken Pizza",
            description: "chicken"
        })    
        ],
       
    ) 
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));