import { useSelector } from 'react-redux';

const countriesList = () => {
  const countries = useSelector((state) => state.countries);
  console.log(countries);
  return (
    <div className="countries-list">
      countriesList
    </div>
  );
};

export default countriesList;
