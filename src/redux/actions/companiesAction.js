import * as COMPANIES_API from '../../api/api';

const FETCH_COMPANIES = 'FETCH_COMPANIES';

export const getCompaniesApi = (payLoad) => ({
  type: FETCH_COMPANIES,
  payLoad,
});

export const fetchCompanies = () => async (dispatch) => {
  const companies = await COMPANIES_API.getCompaniesApi();
  if (companies) {
    dispatch(getCompaniesApi(companies));
  }
};

// export default getCountriesApi;
