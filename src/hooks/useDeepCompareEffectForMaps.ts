import { useEffect } from 'react';

import { useDeepCompareMemoize } from './useDeepCompareMemo';

export const useDeepCompareEffectForMaps = (
  callback: React.EffectCallback,
  dependencies: unknown[]
) => {
  useEffect(callback, [...dependencies.map(useDeepCompareMemoize), callback]);
};
