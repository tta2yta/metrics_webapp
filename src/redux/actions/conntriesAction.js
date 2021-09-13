const FETCH_COUNTRIES = 'FETCH_COUNTRIES';

export const getCountriesApi = (payLoad) => ({
  type: FETCH_COUNTRIES,
  payLoad,
});

export default getCountriesApi;
