import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
  const [addedCountry, seAddedCountry] = useState([]);

  const handleAddCountry = (country) => {
    // onsole.log("object", country)
    const newAddedCountry = [...addedCountry, country];
    seAddedCountry(newAddedCountry);  
  }

  const totalPopulation = addedCountry.reduce( (sum,country)=>sum+country.population,0)

  useEffect(()=>{
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then(res => res.json())
    .then(data=>{
      setCountries(data)
      // const name = data.map(country => country.name)
    })
    .catch(error => error)
  }, [])

  return (
    <div className="App">
      <p>Total {countries.length} Country information loaded </p> 
      <p>Country Added : {addedCountry.length} </p>
      <p>Total Population of Added Country : {totalPopulation}</p>


      <div>
      {
          countries.map(country => <Country country={country} key={country.alpha3Code} handleAddCountry = {handleAddCountry}></Country> )
      }
      </div>

    </div>
  );
}

export default App;
