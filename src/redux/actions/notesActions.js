import constants from '../constants';

export const fetchAllNotes = () => ({
  type: constants.API,
  payload: {
    method: 'GET',
    url: '/api/notes',
    success: response => (setAllNotes(response))
  }
});

export const createNote = (data, onSuccess, onError) => ({
  type: constants.API,
  payload: {
    method: 'POST',
    url: '/api/notes',
    data,
    success: note => (addNote(note)),
    postProcessSuccess: onSuccess,
    postProcessError: onError
  }
});

export const getNodeById = (noteId, onSuccess) => ({
  type: constants.API,
  payload: {
    method: 'GET',
    url: `/api/notes/${noteId}`,
    postProcessSuccess: onSuccess
  }
});

export const updateNoteById = (noteId, data, onSuccess, onError) => ({
  type: constants.API,
  payload: {
    method: 'PUT',
    url: `/api/notes/${noteId}`,
    data,
    success: (noteId, data) => (updateNote(noteId, data)),
    postProcessError: onError,
    postProcessSuccess: onSuccess
  }
});

const addNote = note => ({
  type: constants.ADD_NOTE,
  payload: note
});

const setAllNotes = data => ({
  type: constants.SET_ALL_NOTES,
  payload: data
});

const updateNote = (noteId, data) => ({
  type: constants.API,
  payload: { noteId, data }
});