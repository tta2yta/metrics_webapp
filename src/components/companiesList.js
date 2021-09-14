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
      companiesList
    </div>
  );
};

export default companiesList;
