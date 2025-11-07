
import './App.css';
import Konyv from './components/Konyv';
import {konyvLista} from './adat';

function App() {
  function kosarba(adat) {
    console.log(adat);
    
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyvek</h1>
      </header>
      <article>
        <Konyv konyvLista={konyvLista}/>
      </article>
    </div>
  );
}

export default App;
