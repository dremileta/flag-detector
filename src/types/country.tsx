export type CountryCoords =
  | google.maps.LatLng
  | google.maps.LatLngLiteral
  | null
  | undefined;

export type CountryCoord =
  | number
  | google.maps.LatLng
  | google.maps.LatLngLiteral;

export interface Coords {
  center: CountryCoords;
}

export type Country = {
  __typename: "country";
  name: string;
  id: string;
  flagUrl: string;
  independent: boolean;
  unMember: boolean;
  region: string;
  capital: string;
  subregion: string;
  flagEmoji: string;
  coords: CountryCoords;
  currency: [string, string];
};
