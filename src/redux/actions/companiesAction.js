import * as COMPANIES_API from '../../api/api';

const FETCH_COMPANIES = 'FETCH_COMPANIES';
const FETCH_COMPANY = 'FETCH_COMPANY';

export const getCompaniesApi = (payLoad) => ({
  type: FETCH_COMPANIES,
  payLoad,
});

export const getCompanyDetails = (payLoad) => ({
  type: FETCH_COMPANY,
  payLoad,
});

export const fetchCompanies = () => async (dispatch) => {
  const companies = await COMPANIES_API.getCompaniesApi();
  if (companies) {
    dispatch(getCompaniesApi(companies));
  }
};

// export default getCountriesApi;
