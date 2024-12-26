//import logo from './logo.svg';
import './App.css';
import Componente from './Componente';
import logo from './Dona.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="texto-rojo">
          Laura, postre
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Componente />
      </header>
    </div>
  );
}

export default App;
