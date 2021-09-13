import * as COUNTRIES_API from '../../api/api';

const FETCH_COUNTRIES = 'FETCH_COUNTRIES';

export const getCountriesApi = (payLoad) => ({
  type: FETCH_COUNTRIES,
  payLoad,
});

export const fetchCountries = () => async (dispatch) => {
  const countries = await COUNTRIES_API.getCountriesApi();
  if (countries) {
    dispatch(getCountriesApi(countries));
  }
};

// export default getCountriesApi;
