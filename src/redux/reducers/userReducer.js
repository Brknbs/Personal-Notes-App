import constants from '../constants';

const defaultState = {
  userId: null,
  fullName: null,
  tokem: null,
  isLoggedIn: null,
};

const userInfo = localStorage.getItem('USER_INFO');
const initialState = userInfo ? JSON.parse(userInfo) : defaultState;

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case constants.SET_USER_INFO:
      return {...action.payload};
    case constants.RESET_USER_INFO:
      return {...defaultState};
    default:
      return state;
  }
}

export default userReducer;