import { useRef, useState } from 'react';
import Link from 'next/link';
import { Image } from 'cloudinary-react';
import ReactMapGL, { Marker, Popup, ViewState } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { IProps } from 'src/interface/MapBox';

const Map = ({}: IProps) => {
  const mapRef = useRef<ReactMapGL | null>(null);
  const [viewPort, setViewPort] = useState<ViewState>({
    latitude: 20.3329,
    longitude: 85.807,
    zoom: 10,
  });
  return (
    <div className="text-black relative">
      <ReactMapGL
        {...viewPort}
        width="100%"
        height="calc(100vh - 64px)"
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        onViewportChange={(nextViewport) => setViewPort(nextViewport)}
        ref={(instance) => (mapRef.current = instance)}
        minZoom={5}
        maxZoom={20}
        mapStyle="mapbox://styles/leighhalliday/ckhjaksxg0x2v19s1ovps41ef"
      ></ReactMapGL>
    </div>
  );
};

export default Map;
