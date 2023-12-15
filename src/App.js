import './App.css';

function App() {
  const name= 'vinicios';

  const newName= name.toUpperCase();

  function sum(n1, n2) {
    return n1 + n2;
  }

  const url= 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>
        Hello World
      </h1>

      <p>
        Ola {newName}
      </p>

      <p>
        soma de 2 + 2 = {2 + 2}
      </p>

      <p>
        usando a function eu criei uma função chamada 'sum' que recebe dois números inteiros {sum(2, 2)}
      </p>

      <img src= {url} alt= "minha imagem" />
    </div>
  );
}

export default App;
