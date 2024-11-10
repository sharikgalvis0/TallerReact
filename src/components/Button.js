import React, { useState, useEffect } from "react";

const Button = () => {
    const [contador, setContador] = useState(0);
    
    useEffect(() => {
        console.log(`El contador va a aumentar a: ${contador}`);
    }, [contador]);
    
    const manejarClick = () => {
        setContador(contador + 1);
    };

    return (
        <button onClick={manejarClick}> Haz Click</button>
    );
};

export default Button;
