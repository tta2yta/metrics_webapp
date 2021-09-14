const companiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_COMPANIES': {
      console.log(action.payLoad);
      return action.payLoad.map((companies) => {
        const {
          symbol,
          price,
        } = companies;
        return { symbol, price };
      });
    }
    default:
      return state;
  }
};

export default companiesReducer;
