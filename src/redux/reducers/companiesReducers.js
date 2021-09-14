const companiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_COMPANIES': {
      console.log(action.payLoad);
      return { ...state, ...action.payLoad };
    }
    default:
      return state;
  }
};

export default companiesReducer;
