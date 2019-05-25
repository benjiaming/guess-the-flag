import * as CountryUtils from './CountryUtils';

describe('Country Utilities', () => {   
    it('should return a randomized list of countries', () => {
        const countries = [
            {
                subregion: 'Southern Europe',
                capital: 'Zagreb',
            }, {
                subregion: 'Middle Africa',
                capital: 'São Tomé',
            }, { 
                subregion: 'Caribbean',
                capital: 'Fort-de-France',
            }, {
                subregion: 'Eastern Africa',
                capital: 'Asmara',
            }, { 
                subregion: 'Eastern Europe',
                capital: 'Kiev',
            }
        ];
        const selected = CountryUtils.getRandomCountries(countries, 3);
        expect(selected.length).toEqual(3);
        expect(countries).toContain(selected[0]);
        expect(countries).toContain(selected[1]);
        expect(countries).toContain(selected[2]);
        
        const currentCountry = CountryUtils.getCurrentCountry(countries);
        expect(currentCountry).toBeLessThan(3);
        expect(currentCountry).toBeGreaterThanOrEqual(0);

        expect(CountryUtils.getHint(countries[0])).toContain('Zagreb');
        expect(CountryUtils.getHint(countries[4])).toContain('Eastern Europe');
    });
});