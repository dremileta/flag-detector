import { useRef } from 'react';

import { deepCompareEqualsForMaps } from '../utils/deepCompareEqualsForMaps';

export const useDeepCompareMemoize = (dependency: unknown) => {
  const ref = useRef<unknown>();

  if (!deepCompareEqualsForMaps(dependency, ref.current)) {
    ref.current = dependency;
  }

  return ref.current;
};
