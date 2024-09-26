import { useState } from "react";

const Greeting = ({message, otraProp}) => {

  const [count, setCount] = useState(0)
  

  const handleClick = () => {
    setCount(prevCount => prevCount + 1)
  }

  const handleClick2 = () => {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <>
      <h1>{message}</h1>
      <button onClick={handleClick}>Agregar</button>
      <button onClick={handleClick2}>Quitar</button>
      <span>{count}</span>
      
    </>
  );
};

export default Greeting;