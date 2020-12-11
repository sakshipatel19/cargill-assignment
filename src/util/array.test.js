import { applySort } from './array';
const data = [
  {
    name: 'Afghanistan',
    topLevelDomain: ['.af'],
    alpha2Code: 'AF',
    alpha3Code: 'AFG',
    callingCodes: ['93'],
    capital: 'Kabul',
    altSpellings: ['AF', 'Afġānistān'],
    region: 'Asia',
    subregion: 'Southern Asia',
    population: 27657145
  },
  {
    name: 'Pakistan',
    topLevelDomain: ['.af'],
    alpha2Code: 'AF',
    alpha3Code: 'AFG',
    callingCodes: ['93'],
    capital: 'Kabul',
    altSpellings: ['AF', 'Afġānistān'],
    region: 'Asia',
    subregion: 'Southern Asia',
    population: 27957145
  },
  {
    name: 'indonesia',
    topLevelDomain: ['.af'],
    alpha2Code: 'AF',
    alpha3Code: 'AFG',
    callingCodes: ['93'],
    capital: 'Kabul',
    altSpellings: ['AF', 'Afġānistān'],
    region: 'Asia',
    subregion: 'Southern Asia',
    population: 270145
  }
];
describe('on applysort it should return sorted array', () => {
  it('test sorting', () => {
    const output = [
      {
        name: 'indonesia',
        topLevelDomain: ['.af'],
        alpha2Code: 'AF',
        alpha3Code: 'AFG',
        callingCodes: ['93'],
        capital: 'Kabul',
        altSpellings: ['AF', 'Afġānistān'],
        region: 'Asia',
        subregion: 'Southern Asia',
        population: 270145
      },
      {
        name: 'Afghanistan',
        topLevelDomain: ['.af'],
        alpha2Code: 'AF',
        alpha3Code: 'AFG',
        callingCodes: ['93'],
        capital: 'Kabul',
        altSpellings: ['AF', 'Afġānistān'],
        region: 'Asia',
        subregion: 'Southern Asia',
        population: 27657145
      },
      {
        name: 'Pakistan',
        topLevelDomain: ['.af'],
        alpha2Code: 'AF',
        alpha3Code: 'AFG',
        callingCodes: ['93'],
        capital: 'Kabul',
        altSpellings: ['AF', 'Afġānistān'],
        region: 'Asia',
        subregion: 'Southern Asia',
        population: 27957145
      }
    ];
    expect(applySort(data, 'ASC')).to.deep.equal(output);
  });
});
