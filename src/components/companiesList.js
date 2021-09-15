import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCompanies } from '../redux/actions/companiesAction';
import './companies.css';

const companiesList = () => {
  const companies = useSelector((state) => state.companies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);
  return (
    <>
      <h3>STATS BY COMPANIES </h3>
      <div className="companies-list-main">
        {companies.map((item, index) => (
          <div className="companies-list" key={item.symbol}>
            {console.log(index)}
            <Link to="/details">
              <div className="list-items">
                <div className="symbol">{item.symbol}</div>
                <div className="price">{item.price}</div>
              </div>
            </Link>
          </div>

        ))}
      </div>
    </>
  );
};

export default companiesList;
