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
        {companies.map((item) => (
          <div className="companies-list" key={item.symbol}>

            <Link to={`details/${item.symbol}`} symbol={item.symbol}>
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
