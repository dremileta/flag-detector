import { Status, Wrapper } from '@googlemaps/react-wrapper';

import { Map } from '../map/map';

/**
 * @param className - passed to Map component to be able to apply styles on it
 * since GoogleMap Wrapper component doesn't render itself, and used only
 * for initialization of the map
 */
type MapWrapperProps = {
  className?: string;
  zoomLevel?: number;
};

export const MapWrapper = ({
  className = "",
  zoomLevel = 6,
}: MapWrapperProps) => {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

  return (
    <Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY} render={render}>
      <Map className={`${className}`} zoomLevel={zoomLevel} />
    </Wrapper>
  );
};
