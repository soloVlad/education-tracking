import { reducerUtils } from '@utils';

import { SUBJECTS_ACTION_TYPES } from "./subjects.types";

const DATA_URL = 'https://bgaa.by/test';
const RESULT_URL = 'https://bgaa.by/test_result';

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
      const response = await fetch(DATA_URL);
      const subjectsObj = await response.json();

      dispatch(fetchSubjectsSuccess(subjectsObj));
    } catch (error) {
      dispatch(fetchSubjectsFailure(error));
    }
  };
};

export const sendCurrentStateAsync = () => {
  return async (dispatch, getState) => {
    try {
      const currentState = getState();

      await fetch(RESULT_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: currentState.subjects.subjects,
          teachers: currentState.subjects.teachers
        })
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export const updatePodgroupInfo = (subjectId, podgroupId, podgroupPropName, value) => (
  reducerUtils.createAction(
    SUBJECTS_ACTION_TYPES.UPDATE_PODGROUP,
    { subjectId, podgroupId, podgroupPropName, value }
  )
);

export const updateSubject = (subjectId, propName, value) => (
  reducerUtils.createAction(
    SUBJECTS_ACTION_TYPES.UPDATE_SUBJECT,
    { subjectId, propName, value }
  )
);

export const addPodgroup = (subjectId, podgroupObj) => (
  reducerUtils.createAction(
    SUBJECTS_ACTION_TYPES.ADD_PODGROUP,
    { subjectId, podgroupObj },
  )
)

export const removePodgroup = (subjectId) => (
  reducerUtils.createAction(
    SUBJECTS_ACTION_TYPES.REMOVE_PODGROUP,
    { subjectId }
  )
)