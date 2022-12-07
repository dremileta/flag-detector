import { isLatLngLiteral } from '@googlemaps/typescript-guards';
import { createCustomEqual, EqualityComparatorCreator } from 'fast-equals';

import { CountryCoord } from '../types/country';

const areCoordsEqual: EqualityComparatorCreator<undefined> =
  (deepEqual) => (a: CountryCoord, b: CountryCoord) => {
    if (isLatLngLiteral(a) || isLatLngLiteral(b)) {
      return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
    }

    return deepEqual(a, b);
  };

export const deepCompareEqualsForMaps = createCustomEqual(() => ({
  createIsNestedEqual: areCoordsEqual,
}));
