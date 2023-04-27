import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);
  const hesapla = useMemo( ()=>{return uzunSurenIslem(count)}, [count] );

  function increment(){
    setCount( (c)=> c + 1 );
  };

  function addTodo(){
    setTodo( (c) => [...c, "New Todo"] );
  }

  return (
    <>
      <h2>My Todos</h2>
      <button onClick={addTodo}>Add Todo</button>
      <h3>{todo}</h3>
      <hr />
      <p>Count: {count}
        <button onClick={increment}>+</button>
      </p>
      
      <h2>Expensive Calculation</h2>
      {hesapla}
    </>
  );
};

const uzunSurenIslem = (num) =>{
  for(let i = 0; i < 1000000000; i++){
    num += 1;
  }
  return num;
}

export default App;
