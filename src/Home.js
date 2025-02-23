import React from "react";
import { Route, Routes, Navigate, Link, useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Result from './Result';
import './Home.css';
import background from './img/background.jpg'

function Home() {

    document.body.style.backgroundImage = "url(" + background + ")";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = React.useState('');
    function handleSubmit(event) {
        event.preventDefault();
        setSearchTerm(event.target.elements.searchInput.value)
        navigate('/Result');
    }

    return (
        <>
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
                    <form onSubmit={handleSubmit}>
                        <div class="search-container">
                            <div class="search-icon">
                                <img src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="Search icon" />
                            </div>
                            <input type="text" placeholder="Search the web" name="searchInput" class="search-input" />
                            <div class="mic-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/13407/13407108.png " alt="Mic icon" />
                            </div>
                            <div class="image-search-icon">
                                <img src="   https://cdn-icons-png.flaticon.com/512/11749/11749338.png" alt="Image Search icon" />
                            </div>
                        </div>
                    </form>
                    <div className="langbar">
                        <span className="languageBarItem">Languages:</span> &nbsp;
                        <a className="languageBarItem" href="/?setlang=hi&amp;cc=in&amp;cc=IN" data-h="ID=HpApp,32432.1" aria-label="Hindi">हिंदी</a> &nbsp;
                        <a className="languageBarItem" href="/?setlang=bn&amp;cc=in&amp;cc=IN" data-h="ID=HpApp,32432.1" aria-label="Bangla">বাংলা</a> &nbsp;
                        <a className="languageBarItem" href="/?setlang=ur&amp;cc=in&amp;cc=IN" data-h="ID=HpApp,32432.1" aria-label="Urdu">اردو</a> &nbsp;
                        <a className="languageBarItem" href="/?setlang=pa-guru&amp;cc=in&amp;cc=IN" data-h="ID=HpApp,32432.1" aria-label="Punjabi (Gurmukhi)">ਪੰਜਾਬੀ</a> &nbsp;
                        <a className="languageBarItem" href="/?setlang=mr&amp;cc=in&amp;cc=IN" data-h="ID=HpApp,32432.1" aria-label="Marathi">मराठी</a> &nbsp;
                        <a className="languageBarItem" href="/?setlang=te&amp;cc=in&amp;cc=IN" data-h="ID=HpApp,32432.1" aria-label="Telugu">తెలుగు</a> &nbsp;
                        <a className="languageBarItem" href="/?setlang=ta&amp;cc=in&amp;cc=IN" data-h="ID=HpApp,32432.1" aria-label="Tamil">தமிழ்</a> &nbsp;
                        <a className="languageBarItem" href="/?setlang=kn&amp;cc=in&amp;cc=IN" data-h="ID=HpApp,32432.1" aria-label="Kannada">ಕನ್ನಡ</a> &nbsp;
                        <a className="languageBarItem" href="/?setlang=gu&amp;cc=in&amp;cc=IN" data-h="ID=HpApp,32432.1" aria-label="Gujarati">ગુજરાતી</a> &nbsp;
                        <a className="languageBarItem" href="/?setlang=ml&amp;cc=in&amp;cc=IN" data-h="ID=HpApp,32432.1" aria-label="Malayalam">മലയാളം</a> &nbsp;
                        <a className="languageBarItem" href="/?setlang=or&amp;cc=in&amp;cc=IN" data-h="ID=HpApp,32432.1" aria-label="Odia">ଓଡ଼ିଆ</a>
                    </div>
                </header>
            </div>
            <Routes>
                <Route path="/Result" element={<Result searchTerm={searchTerm} />} />
            </Routes>
        </>
    );
}

export default Home;