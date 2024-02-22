import 'bootstrap/dist/css/bootstrap.css';
import './Result.css';
import React, { useState, useEffect } from 'react';

function Result({ searchTerm }) {
    document.body.style.backgroundImage = "none";

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://localhost:7299/api/Locations/GetLocationByName?location_name=' + searchTerm);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link naming" href="#"><h4>Seekify</h4></a>
                        </li>
                        <li className="nav-item">
                            <div className="search-container-result">
                                <div className="search-icon">
                                    <img src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="Search icon" />
                                </div>
                                <input type="text" placeholder="Search the web" className="search-input" value={searchTerm} />
                                <div className="mic-icon">
                                    <img src="https://cdn-icons-png.flaticon.com/512/13407/13407108.png " alt="Mic icon" />
                                </div>
                                <div className="image-search-icon">
                                    <img src="   https://cdn-icons-png.flaticon.com/512/11749/11749338.png" alt="Image Search icon" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="topnav-result" id="topnavResult">
                <a href="#Search">SEARCH</a>
                <a href="#Copilot">COPILOT</a>
                <a href="#Images">IMAGES</a>
                <a href="#Videos">VIDEOS</a>
                <a href="#Maps">MAPS</a>
                <a href="#News">NEWS</a>
                <a href="#Shopping">SHOPPING</a>
                <a href="#More">MORE</a>
                <a href="javascript:void(0);" className="icon" onclick="myFunction()">
                    <i className="fa fa-bars"></i>
                </a>
            </div>
            <br />
            <div className="container-fluid locations-list">
                <div className="col-sm-12">
                    {data ? (
                        <div className="col-sm-5">
                            {data.map(item => (
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">{item.location_name}</h4>
                                        <p class="card-text">{item.location_address}</p>
                                        <a href="tel:" class="card-link">{item.contact_number}</a>
                                        <a href="#" class="card-link">{item.opening_time}-{item.ending_time}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Result;
