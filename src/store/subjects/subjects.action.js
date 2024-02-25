import { reducerUtils } from '@utils';

import { SUBJECTS_ACTION_TYPES } from "./subjects.types";

export const fetchSubjectsStart = () =>
  reducerUtils.createAction(SUBJECTS_ACTION_TYPES.FETCH_SUBJECTS_START);

export const fetchSubjectsSuccess = (subjectsObj) =>
  reducerUtils.createAction(
    SUBJECTS_ACTION_TYPES.FETCH_SUBJECTS_SUCCESS,
    subjectsObj
  );

export const fetchSubjectsFailure = (error) =>
  reducerUtils.createAction(SUBJECTS_ACTION_TYPES.FETCH_SUBJECTS_FAILED, error);

export const fetchSubjectsStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchSubjectsStart());

    try {
      const response = await fetch('https://bgaa.by/test');
      const subjectsObj = await response.json();

      dispatch(fetchSubjectsSuccess(subjectsObj));
    } catch (error) {
      dispatch(fetchSubjectsFailure(error));
    }
  };
};