import { CountryDetails } from './components/country-details/country-details';
import { CountryList } from './components/country-list/country-list';
import { SelectedCountryContextProvider } from './context/selected-country.context';
import { Country } from './types/country';

export const Main = ({ countries }: { countries: Country[] }) => {
  return (
    <SelectedCountryContextProvider>
      <CountryList
        className="h-screen flex-shrink-0"
        itemWidth={300}
        countries={countries}
      />
      <CountryDetails className="ml-6 flex w-full flex-col" />
    </SelectedCountryContextProvider>
  );
};
