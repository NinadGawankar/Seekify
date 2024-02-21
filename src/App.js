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
        <div class="search-container">
          <div class="search-icon">
            <img src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="Search icon" />
          </div>
          <input type="text" placeholder="Search the web" class="search-input" />
          <div class="mic-icon">
            <img src="https://cdn-icons-png.flaticon.com/512/13407/13407108.png " alt="Mic icon" />
          </div>
          <div class="image-search-icon">
            <img src="   https://cdn-icons-png.flaticon.com/512/11749/11749338.png" alt="Image Search icon" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
