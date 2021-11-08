import * as ListUtils from './ListUtils';

export const getRandomCountries = (countries, numCountries) => {
    const rangeNum = ListUtils.range(countries.length);
    const countryPos = ListUtils.shuffle(rangeNum).slice(0, numCountries);
    return countryPos.map(i => countries[i]);
}
export const getCurrentCountry = (selectCountries) => {
    return ListUtils.pickRandomPos(selectCountries);
}
export const getHint = (country) => {
    return `This country is located in ${country.subregion}. It's capital is ${country.capital}.`;
}

export async function loadCountries(numCountries) {
    const url = 'https://restcountries.com/v2/all';

    const result = await fetch(url).then(d => d.json());
    const countries = result.map(i => ({name: i.name, flag: i.flag, capital: i.capital, subregion: i.subregion}));
    const selectCountries = getRandomCountries(countries, numCountries);
    const currentCountry = getCurrentCountry(selectCountries);
    const hint = getHint(selectCountries[currentCountry]);
    return {countries, selectCountries, currentCountry, hint, loaded: true};
  }


