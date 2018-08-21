import { createActions } from 'redux-actions';
import axios from 'axios';

const API_URL = 'https://killer-notes.herokuapp.com/note';

export const {
  fetchNotesRequest,
  fetchNotesSuccess,
  fetchNotesFailure,
  fetchOneRequest,
  fetchOneSuccess,
  fetchOneFailure,
  addNoteRequest,
  addNoteSuccess,
  addNoteFailure,
  editNoteRequest,
  editNoteSuccess,
  editNoteFailure,
} = createActions(
  'FETCH_NOTES_REQUEST',
  'FETCH_NOTES_SUCCESS',
  'FETCH_NOTES_FAILURE',
  'FETCH_ONE_REQUEST',
  'FETCH_ONE_SUCCESS',
  'FETCH_ONE_FAILURE',
  'ADD_NOTE_REQUEST',
  'ADD_NOTE_SUCCESS',
  'ADD_NOTE_FAILURE',
  'EDIT_NOTE_REQUEST',
  'EDIT_NOTE_SUCCESS',
  'EDIT_NOTE_FAILURE',
);

export const fetchNotes = () => async dispatch => {
  dispatch(fetchNotesRequest());
  try {
    let response = await axios.get(`${API_URL}/get/all`);
    dispatch(fetchNotesSuccess(response.data));
  } catch (err) {
    console.log(err);
    dispatch(fetchNotesFailure(err));
  }
};

export const fetchOne = id => async dispatch => {
  dispatch(fetchOneRequest());
  try {
    let response = await axios.get(`${API_URL}/get/${id}`);
    dispatch(fetchOneSuccess(response.data));
  } catch (err) {
    dispatch(fetchOneFailure(err));
  }
};

export const addNote = data => async dispatch => {
  dispatch(addNoteRequest());
  try {
    let response = await axios.post(`${API_URL}/create`, data);
    dispatch(addNoteSuccess({ _id: response.data.success, ...data }));
  } catch (err) {
    dispatch(addNoteFailure(err));
  }
};
