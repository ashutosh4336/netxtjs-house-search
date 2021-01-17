import { ISearchBoxProps } from 'src/interface/SearchBox';

import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css';
import { ChangeEvent } from 'react';

const ReadySearchBox = ({ onSelectAddress, defaultValue }: ISearchBoxProps) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutoComplete({ debounce: 400, defaultValue });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('HandleChange');
    setValue(e.target.value);
    if (e.target.value === '') {
      onSelectAddress('', null, null);
    }
  };

  const handleSelect = async (address: string) => {
    console.log('HandleSelect', { address });
  };
  console.log({ status, data });

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        id="search"
        value={value}
        onChange={handleChange}
        disabled={!ready}
        placeholder="Search Your Location"
        className="w-full p-2"
        autoComplete="off"
      />
    </Combobox>
  );
};

export default ReadySearchBox;
