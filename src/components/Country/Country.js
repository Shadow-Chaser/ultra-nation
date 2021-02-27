import React from 'react';
import './Country.css'

const Country = (props) => {
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className="country-area">
          
            <h2>Country : {props.country.name}</h2>
            <img src={props.country.flag} alt=""/>

            <h4>Native Name : {props.country.nativeName}</h4>
            <h4>Capital : {props.country.capital}</h4>
            <h4>Population : {props.country.population}</h4>
            <h4>Region : {props.country.region}</h4>
            <h4>Sub-Region : {props.country.subregion}</h4>
            <h4>Area: {props.country.area} km<sup>2</sup></h4>
            
            <button onClick={()=> handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;