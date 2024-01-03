import React from "react";
import "./Country.css";

const Country = (props) => {
  //   console.log(props);
  const { flags, name, population, area, region } = props.country;
  return (
    <div className="country">
      <img src={flags.png} alt="" />
      <h2>Name:{name.common}</h2>
      <h3>Region: {region}</h3>
      <p>Population: {population}</p>
      <p>Area:{area}</p>
    </div>
  );
};

export default Country;
