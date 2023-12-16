import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';


function App() {
  const name= 'vinicios';

  const url= 'https://via.placeholder.com/150';

  return (
    <>
      <SayMyName name= "vinicios" />
      <SayMyName name= {name} />
      <Pessoa 
        name= "rodrigo"
        age= {20}
        profession= "programador"
        picture= {url}
      />
      <Pessoa 
        profession= "programador"
        picture= {url}
      />
    </>
  );
}

export default App
