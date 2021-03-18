import React, { useEffect, useState } from 'react';
import AboutCountry from '../aboutcountry/AboutCountry';
import './Home.css'

const Home = () => {
    const [country, setCountry] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])
    return (
        <div className="container ">
            <div className="row">
                <div className="country">
                    {
                        country.map(country => <AboutCountry country={country} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;