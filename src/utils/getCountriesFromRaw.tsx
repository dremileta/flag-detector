import { RawCountry } from '../static-data/countries';
import { Country } from '../types/country';
import { getRawCountries } from './getRawCountries';

export const getCountriesFromRaw = (): Country[] => {
  return getRawCountries().map((value: RawCountry) => ({
    __typename: "country",
    name: String(value.name.common),
    id: String(value.cca2).toLowerCase(),
    independent: Boolean(value.independent),
    unMember: Boolean(value.unMember),
    flagUrl: `https://flagcdn.com/${String(value.cca2).toLowerCase()}.svg`,
    flagEmoji: decodeURIComponent(value.flag),
    region: String(value.region),
    capital: value.capital.length ? String(value.capital[0]) : "",
    subregion: String(value.subregion),
    coords: { lat: value.latlng[0], lng: value.latlng[1] },
    currency: (function getCurrency() {
      const currencyKeys = Object.keys(value.currencies);
      if (!currencyKeys.length) {
        return ["unknown", "x"];
      }
      const first = value.currencies[currencyKeys[0]];

      return [first.name, first.symbol];
    })(),
  }));
};
