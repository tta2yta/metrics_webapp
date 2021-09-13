const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_COUNTRIES': {
      return { ...state, ...action.payLoad };
    }
    default:
      return state;
  }
};

export default countriesReducer;
