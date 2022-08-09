import fondo from './fondo.jpg';
import './App.css';
import Menu from './components/Menu'
import Producto from './components/Producto'

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundImage: "url("+fondo+")", backgroundSize: "cover" }}>
        <Menu />
        {/*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
      <article>
        <Producto text="café" />
        <Producto text="semillitas" />
        <Producto text="pisco" />
      </article>
    </div>
  );
}

export default App;
