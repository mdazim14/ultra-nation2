import React from 'react';

const Country = (props) => {
    const {name, population, flag, region} = props.country;
    const flagStyle={height:'100px', border: '1px solid gray'};
    const countryStyle = {border:'1px solid gray', margin: '10px', padding: '10px'};
   const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h4>This is a : {name}  </h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Population: {population}</p>
            <p><small> Region: {region}</small></p>
           <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;