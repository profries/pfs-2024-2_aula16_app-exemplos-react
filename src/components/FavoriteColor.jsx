import { useState } from "react";

export default function FavoriteColor() {
    let [ color, setColor ] = useState('black');

    return (
        <button style={{ backgroundColor: color, color:'white' }}
            onClick = { () => {
                if(color == 'red') {
                    setColor('blue'); 
                }
                else {
                    setColor('red');
                }
                console.log(color);
            }  }
        >
            {color}
        </button>
    )   
}