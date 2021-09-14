import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCompanies } from '../redux/actions/companiesAction';
import './companies.css';

const companiesList = () => {
  const companies = useSelector((state) => state.companies);
  const dispatch = useDispatch();
  const bg = { 'bg-1': 'bg-1', 'bg-2': 'bg-2' };
  let kkk = '';
  console.log(companies);

  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);
  return (
    <div className="companies-list-main">
      {companies.map((item, index) => (
        <div className="companies-list" key={item.symbol}>
          {console.log(index)}
          {(() => {
            if (index % 2 === 0 && index !== 0) {
              kkk = bg['bg-1'];
              console.log(kkk);
            }
          })()}
          <div className="list-items">
            <div className="symbol">{item.symbol}</div>
            <div className="price">{item.price}</div>
          </div>
        </div>

      ))}
    </div>
  );
};

export default companiesList;
