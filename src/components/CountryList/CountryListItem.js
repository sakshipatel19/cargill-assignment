import React, { useEffect, useState } from 'react';
import { applySort } from '../../util/array';

import './index.css';

const CountryListItem = ({ countryList }) => {
  const [sortBy, setSortBy] = useState('ASC');
  const [data, setData] = useState(countryList);
  const handleClick = () => {
    if (sortBy === 'ASC') {
      setSortBy('DSC');
    } else {
      setSortBy('ASC');
    }
  };
  useEffect(() => {
    const sortData = (sortBy, countryList) => {
      const sortedData = applySort(countryList, sortBy);
      setData(sortedData);
    };
    sortData(sortBy, countryList);
  }, [sortBy, countryList]);
  return (
    <div className="country-list">
      <div className="country-list-row header">
        <div className="list-items">Country name</div>
        <div className="list-items">Capital</div>
        <div className="list-items">Language</div>
        <div className="list-items population" onClick={handleClick}>
          Population
        </div>
        <div className="list-items">Currency</div>
      </div>
      {data.map((country, i) => (
        <div className="country-list-row" key={i}>
          <div className="list-items">{country.name}</div>
          <div className="list-items">{country.capital}</div>
          <div className="list-items">
            {country.languages.map((lan, i) => (
              <span key={i}>{i === country.languages.length - 1 ? `${lan.name}` : `${lan.name}, `}</span>
            ))}
          </div>
          <div className="list-items">{country.population}</div>
          <div className="list-items">{`${country.currencies[0].name}(${country.currencies[0].symbol})`}</div>
        </div>
      ))}
    </div>
  );
};

export default CountryListItem;
