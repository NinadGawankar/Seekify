import logo from './img/logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <div class="container topnav">
        <a className="topnav_lowbottom" href="#Copilot"><h4>Seekify</h4></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#Copilot">Copilot</a>
        <a href="#Images">Images</a>
        <a href="#Videos">Videos</a>
        <a href="#Maps">Maps</a>
        <a href="#News">News</a>
        <a className="topnav_lowtop" href="#More"><h4 className='h2More'>...</h4></a>
      </div>
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
