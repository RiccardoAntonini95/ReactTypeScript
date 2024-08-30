import React from "react"
//React.FC è il type per i functional component
//scrivendo la sintassi dei generics a React.FC ho la possibilità di unire le mie custom props come items con la prop speciale children,
//che altrimenti avrei problemi a definire
const Todos: React.FC<{ items: string[] }> = (props) => {
    return (
        <ul>
            {props.items.map((item) => (<li key={item}>{item}</li>))}
        </ul>
    )
}

export default Todos