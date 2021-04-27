import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';
import animalData from './data/data.json';

function App() {
  const [countries, setCountries]  = useState([])
  const [cart, setCart] = useState([]);
  const [animal, setAnimal] = useState([]);
  useEffect(() =>{
    setAnimal(animalData);
    console.log(animalData);
  },[])
   useEffect(() =>{
     fetch('https://restcountries.eu/rest/v2/all')
     .then(res => res.json())
     .then(data => {
       setCountries(data);
      })
      .catch(error => console.log(error))
    }, [])

    const handleAddCountry = (country) => {
      const newCart = [...cart, country]
      setCart(newCart);
    }

  return (
    <div className="App">
     <h1> Country Loaded: {countries.length}</h1>
     <h4>Country added: {cart.length}</h4>
     <Cart cart={cart}></Cart>

       {
         countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>  )
       }
   
      <header className="">

      </header>
    </div>
  );
}

export default App;
