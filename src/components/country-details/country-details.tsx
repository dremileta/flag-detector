import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { useMemo } from 'react';

import { useSelectedCountryContext } from '../../context/selected-country.context';
import { CountryDetailsItem } from '../country-details-item/country-details-item';
import { MapWrapper } from '../map-wrapper/map-wrapper';

type CountryDetailsProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const CountryDetails = ({ className }: CountryDetailsProps) => {
  const selectedCountry = useSelectedCountryContext();

  const mapWrapper = useMemo(() => {
    return <MapWrapper className="h-full w-full" zoomLevel={6} />;
  }, []);

  if (!selectedCountry) return null;

  const { name, capital, region, subregion, currency, unMember, flagEmoji } =
    selectedCountry;
  const [currencyLabel, currencySymbol] = currency;

  const detailsValues = [
    { label: "Name", value: name },
    { label: "Capital", value: capital },
    { label: "Region", value: region },
    { label: "Subregion", value: subregion },
    { label: "Currency", value: `${currencySymbol} - ${currencyLabel}` },
    { label: "United Nations Member", value: unMember ? "Yes" : "No" },
    { label: "Flag Emoji", value: flagEmoji },
  ];

  return (
    <div className={className}>
      <div className="mb-2">
        {detailsValues.map((d) => (
          <CountryDetailsItem key={d.label} label={d.label} value={d.value} />
        ))}
      </div>
      {mapWrapper}
    </div>
  );
};
