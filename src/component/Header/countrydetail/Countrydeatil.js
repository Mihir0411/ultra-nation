import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Countrydeatil = () => {
    const {name} = useParams()
    const [countryDetail, setCountrydetail] = useState([])
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
        .then(res =>res.json())
        .then(data=>setCountrydetail(data[0]))
    },[]);
    // const detail = countryDetail.map(country =>country)
    // // const {name} = detail
    // console.log(detail[0].name)
    return (
        <div>
            <h3>This is a {countryDetail.name} detail</h3> 
            <h5>Capital: {countryDetail.capital}</h5>
            <p>population: {countryDetail.population}</p>
            <p>timezones: {countryDetail.timezones}</p> 
            {/* {
                countryDetail.map(country => <div><h3>Name: {country.name}</h3>
                <h5>Capital: {country.capital}</h5>
                <p>population: {country.population}</p>
                <p>timezones: {country.timezones}</p>
                </div>
                   )
            } */}
        </div>
    );
};

export default Countrydeatil;