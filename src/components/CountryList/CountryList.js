import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from '../Card';
import './index.css';
import CountryListItem from './CountryListItem';

const CountryList = () => {
  const [countryList, setCountryList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [filterdCountry, setFilteredCountry] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://restcountries.eu/rest/v2/all');
      setCountryList(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filterBySelect = selectedCountry => {
      const selectedCountryObj =
        selectedCountry === 'All' ? countryList : countryList.filter(country => country.name === selectedCountry);
      setFilteredCountry(selectedCountryObj);
    };
    filterBySelect(selectedCountry);
  }, [selectedCountry]);

  useEffect(() => {
    const filterBySearch = searchText => {
      const selectedCountryObj = countryList.filter(
        country => country.name.toLowerCase().includes(searchText) || country.alpha3Code === searchText
      );
      setFilteredCountry(selectedCountryObj);
    };
    filterBySearch(searchText);
  }, [searchText]);

  const handleChange = event => {
    setSearchText(event.target.value);
  };

  const handleSelect = event => {
    setSelectedCountry(event.target.value);
  };
  return (
    <div className="country-list-container">
      <Card>
        <div className="card-header">
          <div className="card-title">Country List</div>
        </div>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search by Country Name of Country Code..."
            onChange={handleChange}
          />
        </div>
        <div className="select-container">
          Select Country :
          <select className="select" onChange={handleSelect} value={selectedCountry}>
            <option>All</option>
            {countryList.map(country => (
              <option key={country.name}>{country.name}</option>
            ))}
          </select>
        </div>
        <CountryListItem countryList={filterdCountry.length ? filterdCountry : countryList} />
      </Card>
    </div>
  );
};

export default CountryList;
