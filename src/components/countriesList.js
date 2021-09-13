import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getCountriesApi from '../redux/actions/conntriesAction';

const countriesList = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  console.log(countries);

  useEffect(() => {
    dispatch(getCountriesApi());
  });
  return (
    <div className="countries-list">
      countriesList
    </div>
  );
};

export default countriesList;
