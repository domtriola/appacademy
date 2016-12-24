import merge from 'lodash/merge';

const initialState = {
  baseCurrency: "Please select",
  rates: {}
};

const reducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case "SWITCH_CURRENCY":
      const nextState = merge({}, state);
      nextState.rates = action.rates;
      nextState.baseCurrency = action.baseCurrency;
      return nextState;
    default:
      return state;
  }
};

export default reducer;
