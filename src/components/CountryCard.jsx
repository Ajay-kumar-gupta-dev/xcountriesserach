import React from "react";

function CountryCard({ country }) {
  return (
    <div className="countryCard">
      <img src={country.flag} alt={country.common} />
      <p>{country.common}</p>
    </div>
  );
}

export default CountryCard;
