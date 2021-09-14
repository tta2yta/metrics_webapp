import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCompanies } from '../redux/actions/companiesAction';

const companiesList = () => {
  const companies = useSelector((state) => state.companies);
  const dispatch = useDispatch();
  console.log(companies);

  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);
  return (
    <div className="companies-list">
      {companies.map((item) => (
        <div key={item.symbol}>
          {' '}
          <li>{item.symbol}</li>
          <li>{item.price}</li>
        </div>

      ))}
    </div>
  );
};

export default companiesList;
