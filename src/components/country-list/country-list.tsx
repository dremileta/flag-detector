import { DetailedHTMLProps, HTMLAttributes, useState } from 'react';

import { useSelectedCountryContextAPI } from '../../context/selected-country.context';
import { Country } from '../../types/country';
import { CountryListItem } from '../country-list-item/country-list-item';
import { CountryListSearch } from '../country-list-search/country-list-search';

interface CountryListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  countries: Country[];
  itemWidth?: number;
}

export const CountryList = ({
  className = "",
  itemWidth = 150,
  countries,
}: CountryListProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { onCountryChange } = useSelectedCountryContextAPI();

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{ "--countryListWidth": `${itemWidth}px` } as React.CSSProperties}
      className={`${className} flex w-[var(--countryListWidth)] flex-col`}
    >
      <CountryListSearch
        className="mb-4"
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
      />
      <div className="flex flex-col gap-4 overflow-auto">
        {filteredCountries.map((country) => (
          <CountryListItem
            key={country.id}
            width={itemWidth}
            country={country}
            onItemClick={onCountryChange}
          />
        ))}
      </div>
    </div>
  );
};
