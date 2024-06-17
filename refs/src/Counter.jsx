/*Modificare il componente Counter in modo che ogni volta che il valore del contatore cambia, il valore di un ref viene aggiornato per contenere la direzione del cambiamento (cioè "su" o "giù") rispetto alla prop valore iniziale.
Stampa il valore del ref sulla console solo quando è diverso dal valore precedente.*/


import React, { useState, useRef, useEffect } from "react";

export default function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);
  const directionRef = useRef(null);
  const prevDirectionRef = useRef(null);

  const increment = () => {
    setCount((p) => p + 1);
  };

  const decrement = () => {
    setCount((p) => p - 1);
  };

  useEffect(() => {
    if (count > initialValue) {
      directionRef.current = "up";
    } else if (count < initialValue) {
      directionRef.current = "down";
    } else {
      directionRef.current = null;
    }

    if (directionRef.current !== prevDirectionRef.current) {
      if (directionRef.current) {
        console.log("Direction:", directionRef.current);
      }
      prevDirectionRef.current = directionRef.current;
    }
  }, [count, initialValue]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
