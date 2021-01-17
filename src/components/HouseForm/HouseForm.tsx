import { useState, useEffect, ChangeEvent, Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { IFormData, IProps } from 'src/interface/HouseForm';
import SearchBox from '../SearchBox/SearchBox';

const HouseForm = ({}: IProps) => {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    errors,
    watch,
  } = useForm<IFormData>({ defaultValues: {} });

  useEffect(() => {
    register({ name: 'address' }, { required: 'Please enter your address.' });
    register({ name: 'latitude' }, { required: true, min: -90, max: 90 });
    register({ name: 'longitude' }, { required: true, min: -180, max: 180 });

    return () => {};
  }, [register]);

  const onSubmit = (data: IFormData) => {
    setSubmitting(true);
    handleCreate(data);
  };

  const handleCreate = async (data: IFormData) => {
    console.log(data);
  };

  return (
    <Fragment>
      <form className="mx-auto max-w-xl py-4" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-xl">Add a house</h1>

        <div className="mt-4">
          <label htmlFor="search" className="block">
            Search Here For Your Address
          </label>
          {/* SEARCH FILED */}
          <SearchBox
            onSelectAddress={(address, latitude, longitude) => {
              setValue('address', address);
              setValue('latitude', latitude);
              setValue('longitude', longitude);
            }}
            defaultValue=""
          />
          {errors.address && (
            <small className="text-red-600">{errors.address.message}</small>
          )}
        </div>
      </form>
    </Fragment>
  );
};

export default HouseForm;
