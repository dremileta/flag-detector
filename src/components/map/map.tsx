import { useEffect, useRef, useState } from 'react';

import { useSelectedCountryContext } from '../../context/selected-country.context';
import { useDeepCompareEffectForMaps } from '../../hooks/useDeepCompareEffectForMaps';

/**
 * @param className - applies to 'div' wrapper
 */
type MapProps = {
  className?: string;
  zoomLevel: number;
};

export const Map = ({ className = "", zoomLevel }: MapProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  const selectedCountry = useSelectedCountryContext();

  useEffect(() => {
    if (ref.current && !map && selectedCountry?.coords) {
      setMap(
        new google.maps.Map(ref.current, {
          center: selectedCountry?.coords,
          zoom: zoomLevel,
        })
      );
    }
  }, [ref, map, selectedCountry, zoomLevel]);

  useDeepCompareEffectForMaps(() => {
    if (map && selectedCountry?.coords) {
      map.setOptions({
        center: selectedCountry?.coords,
        zoom: zoomLevel,
      });
    }
  }, [map, location, zoomLevel]);

  return <div className={`${className}`} ref={ref} />;
};
