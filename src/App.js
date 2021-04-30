import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';
import animalData from './data/data.json';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function App() {

  const areaData = [
    {name: "Page A",uv: 4000,pv: 2400,amt: 2400},
    {name: "Page B",uv: 3000,pv: 1398,amt: 2210},
    {name: "Page C",uv: 2000,pv: 9800,amt: 2290},
    {name: "Page D",uv: 2780,pv: 3908,amt: 2000},
    {name: "Page E",uv: 1890,pv: 4800,amt: 2181},
    {name: "Page F",uv: 2390,pv: 3800,amt: 2500},
    {name: "Page G",uv: 3490,pv: 4300,amt: 2100}
  ];

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
  
     
        <AreaChart
          width={500}
          height={400}
          data={areaData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      
    
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
