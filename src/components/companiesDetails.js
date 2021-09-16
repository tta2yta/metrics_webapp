import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCompanyDetails } from '../redux/actions/companiesAction';

const companiesDetails = () => {
  const company = useSelector((state) => state.companies.selected);
  const { symbol } = useParams();
  console.log(symbol);
  console.log(company);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompanyDetails(symbol));
  }, []);

  return (
    <div>
      company details
      {

        company !== null || undefined ? company.map((item) => (
          <div key={item.symbol}>
            <li>{item.symbol}</li>
            <li>{item.price}</li>
            <li>{item.volAvg}</li>
          </div>
        )) : []
      }
    </div>
  );
};
export default companiesDetails;
