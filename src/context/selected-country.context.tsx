import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

import { Country } from '../types/country';

type SelectedCountryContextState = Country | null;

type SelectedCountryContextAPI = {
  onCountryChange: (country: Country) => void;
};

const SelectedCountryContext = createContext<SelectedCountryContextState>(null);

const SelectedCountryContextAPI = createContext<SelectedCountryContextAPI>(
  {} as SelectedCountryContextAPI
);

export const useSelectedCountryContextAPI = () =>
  useContext(SelectedCountryContextAPI);

export const useSelectedCountryContext = () =>
  useContext(SelectedCountryContext);

/**
 * Split action logic (API) from state to
 * get rid of re-rendering in components that
 * are not using (not reading, not subscribed to) the state
 * but only using the actions(API) to update the state
 */
export const SelectedCountryContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectedCountry, setSelectedCountry] =
    useState<SelectedCountryContextState>(null);

  const api = useMemo(
    () => ({
      onCountryChange: (country: Country) => {
        return setSelectedCountry(country);
      },
    }),
    []
  );

  return (
    <SelectedCountryContextAPI.Provider value={api}>
      <SelectedCountryContext.Provider value={selectedCountry}>
        {children}
      </SelectedCountryContext.Provider>
    </SelectedCountryContextAPI.Provider>
  );
};
