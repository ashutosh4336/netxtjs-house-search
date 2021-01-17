import { ChangeEvent, Fragment, FunctionComponent } from 'react';
import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import { useGoogleMapsScript, Libraries } from 'use-google-maps-script';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import { ISearchBoxProps } from 'src/interface/SearchBox';
import '@reach/combobox/styles.css';
import ReadySearchBox from './ReadySearchBox';
// import Spinner from '../Loader/Loader';

const libraries: Libraries = ['places'];

const SearchBox = ({ onSelectAddress, defaultValue }: ISearchBoxProps) => {
  const { isLoaded, loadError } = useGoogleMapsScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? '',
    libraries,
  });
  if (!isLoaded) {
    // return <Spinner />;
    return <h1>Loading...</h1>;
  }
  if (loadError) {
    return (
      <div>
        <small>Error loading Page</small>
      </div>
    );
  }
  return (
    <Fragment>
      <ReadySearchBox
        onSelectAddress={onSelectAddress}
        defaultValue={defaultValue}
      />
    </Fragment>
  );
};

export default SearchBox;
