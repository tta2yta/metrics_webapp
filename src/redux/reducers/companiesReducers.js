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
    case 'FETCH_COMPANY': {
      console.log(action.payLoad);
      return action.payLoad.map((company) => {
        const {
          symbol,
          price,
        } = company;
        return { selected: { symbol, price } };
      });
    }

    default:
      return state;
  }
};

export default companiesReducer;
