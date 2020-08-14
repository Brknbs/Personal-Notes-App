import constants from '../constants';

const loadingReducer = (state = false, action) => {
  switch(action.type) {
    case constants.TOGGLE_LOADING:
      return !state;
    default:
      return state;
  }
};

export default loadingReducer;