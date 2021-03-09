import React, { useEffect, useState } from 'react';
import AboutCountry from '../aboutcountry/AboutCountry';

const Home = () => {
    const [country, setCountry] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])
    return (
        <div>
            <h4>this is home</h4>
            {
                country.map(country =><AboutCountry country={country}/>)
            }
            
        </div>
    );
};

export default Home;