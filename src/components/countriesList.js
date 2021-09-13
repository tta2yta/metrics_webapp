import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchCountries from '../redux/actions/conntriesAction';

const countriesList = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  console.log(countries);

  useEffect(() => {
    dispatch(fetchCountries());
  });
  return (
    <div className="countries-list">
      countriesList
    </div>
  );
};

export default countriesList;
