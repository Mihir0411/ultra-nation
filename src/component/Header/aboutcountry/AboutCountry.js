import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './AboutCoountry.css'

const AboutCountry = (props) => {
    // console.log(props.country.name)
    const { name, capital, flag } = props.country
    const history = useHistory()
    const details = name => {
        const url = `/about/${name}`;
        history.push(url);
    }
    return (
        <div className="container">
                <div className="about">
                    <div className="text-center">
                        <img src={flag} alt="" />
                    </div>
                    <div className="text-center">
                        <h3>Nmae: {name}</h3>
                        <h4>Capital: {capital}</h4>
                        <br></br>
                        <button onClick={()=> details(name)}>see more</button>
                    </div>
                </div>
        </div>
    );
};

export default AboutCountry;