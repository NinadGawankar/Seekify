import 'bootstrap/dist/css/bootstrap.css';
import './Result.css';

function Result() {
    document.body.style.backgroundImage = "none";

    return (
        <>
            <nav class="navbar navbar-expand-sm bg-light navbar-light">
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link naming" href="#"><h4>Seekify</h4></a>
                        </li>
                        <li class="nav-item">
                            <div class="search-container-result">
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
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="topnav-result" id="topnavResult">
                <a href="#Search">SEARCH</a>
                <a href="#Copilot">COPILOT</a>
                <a href="#Images">IMAGES</a>
                <a href="#Videos">VIDEOS</a>
                <a href="#Maps">MAPS</a>
                <a href="#News">NEWS</a>
                <a href="#Shopping">SHOPPING</a>
                <a href="#More">MORE</a>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
            <div className="App">
            </div>
        </>
    );
}

export default Result;
