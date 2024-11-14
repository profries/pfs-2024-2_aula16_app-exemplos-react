import { useState } from "react";

export default function Contador() {
    let [contador, setContador] = useState(0);

    const incrementa = () => {
        setContador(contador+1);
        console.log(contador);
    }

    return (
        <p>
            <button onClick={incrementa}>+</button> 
            {contador}
        </p>
    )
}