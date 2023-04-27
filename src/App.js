import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const hesaplama = useMemo( ()=> { return uzunSurenHesaplama(count)} , [count] );

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {hesaplama}
      </div>
    </div>
  );
}

//Burada yapılan işlemler uzun sürüyor. Bu fonksiyon çalıştıktan sonra geriye bir sayı döndürüyor.
//Bu fonksiyonda num adında alınan parametre yukarıda state ile oluşturulan count değeridir. Yani bu fonksiyon bir state'ye değer atamaktadır.
const uzunSurenHesaplama = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default App;

/*
increment adında olan fonksiyon bir state güncelleme fonksiyonudur ve butona tıklandığında çalışır. State güncelleneceği için component yeniden
oluşturulur ve bu durumda uzunSurenHesaplama fonksiyonu tekrardan çalışır. ve yüklü de bir işlem olduğu için gecikme yaratır.

*/