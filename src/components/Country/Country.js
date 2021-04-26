import React from 'react';

const Country = (props) => {
    const {name, population, flag, region} = props.country;
    const flagStyle={height:'100px', border: '1px solid gray'};
    return (
        <div>
            <h4>This is a : {name}  </h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Population: {population}</p>
            <p><small> Region: {region}</small></p>
           
        </div>
    );
};

export default Country;