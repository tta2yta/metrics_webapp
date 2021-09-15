import { useParams } from 'react-router-dom';

const companiesDetails = () => {
  const { symbol } = useParams();
  console.log(symbol);
  return (
    <div>
      company details
    </div>
  );
};
export default companiesDetails;
