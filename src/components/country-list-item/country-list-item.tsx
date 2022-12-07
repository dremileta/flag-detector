import { Country } from '../../types/country';

const ASPECT_RATIO = 5 / 3;
const ITEM_FOOTER_HEIGHT = 34;

export type CountryListItemProps = {
  width: number;
  country: Country;
  onItemClick: (country: Country) => void;
};

export const CountryListItem = ({
  width,
  country,
  onItemClick,
}: CountryListItemProps) => {
  return (
    <button
      className={`group/item flex h-[var(--countryListItemHeight)] w-[var(--countryListItemWidth)] flex-col border-2 border-gray-200 transition-all hover:border-blue-600 dark:border-gray-600 dark:hover:hover:border-blue-600`}
      style={
        {
          "--countryListItemWidth": `${width}px`,
          "--countryListItemHeight": `${
            width / ASPECT_RATIO + ITEM_FOOTER_HEIGHT
          }px`,
        } as React.CSSProperties
      }
      onClick={() => onItemClick(country)}
    >
      <img
        className="block aspect-[5/3] object-cover object-left"
        src={country.flagUrl}
        alt={country.name}
      />
      <div className="w-full bg-gray-200 transition-colors group-hover/item:bg-gray-300 dark:bg-gray-600 dark:group-hover/item:bg-gray-500">
        <p className="p-1 text-gray-900 transition-colors dark:text-gray-50">
          {country.name}
        </p>
      </div>
    </button>
  );
};
