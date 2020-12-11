import axios from 'axios';

export const fetchCountryList = async () => {
  await axios('https://restcountries.eu/rest/v2/all');
};

// export const defaultList = async () => {
//   const response = await axios.get();
//   console.log(response);
//   return response;
// };
