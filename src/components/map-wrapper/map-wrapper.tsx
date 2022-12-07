import { Status, Wrapper } from '@googlemaps/react-wrapper';

import { Map } from '../map/map';

export type MapProps = {
  zoomLevel?: number;
  className?: string;
};

export type MapWrapperProps = {
  zoomLevel?: number;
  className?: string;
};

export const MapWrapper = ({
  className = "",
  // location,
  zoomLevel = 6,
}: MapWrapperProps) => {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

  console.log("MAP WRAPPER RENDER", []);

  return (
    <Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY} render={render}>
      <Map className={`${className}`} zoomLevel={zoomLevel} />
    </Wrapper>
  );
};
