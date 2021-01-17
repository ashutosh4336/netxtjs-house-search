import Layout from 'src/components/Layout/layout';
import Map from 'src/components/Map/Map';

export default function Home() {
  return (
    <Layout
      main={
        <div className="flex">
          <div
            className="w-1/2 pb-4"
            style={{ maxHeight: 'calc(100vh - 64px)' }}
          >
            HouseList
          </div>
          <div className="w-1/2">
            <Map />
          </div>
        </div>
      }
    />
  );
}
