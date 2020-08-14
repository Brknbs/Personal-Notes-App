import constants from '../constants';

export const fetchAllNotes = () => ({
  type: constants.API,
  payload: {
    method: 'GET',
    url: '/api/methods',
    success: response => (setAllNotes(response))
  }
});

const setAllNotes = data => ({
  type: constants.SET_ALL_NOTES,
  payload: data
});