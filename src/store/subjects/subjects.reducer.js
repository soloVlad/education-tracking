import { SUBJECTS_ACTION_TYPES } from './subjects.types';

export const SUBJECTS_INITIAL_STATE = {
  subjects: [],
  teachers: [],
  isLoading: false,
  error: null,
};

export const subjectsReducer = (
  state = SUBJECTS_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case SUBJECTS_ACTION_TYPES.FETCH_SUBJECTS_START:
      return {
        ...state,
        isLoading: true,
      };

    case SUBJECTS_ACTION_TYPES.FETCH_SUBJECTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        subjects: payload.data,
        teachers: payload.teachers
      };

    case SUBJECTS_ACTION_TYPES.FETCH_SUBJECTS_FAILED:
      return { ...state, isLoading: false, error: payload };

    case SUBJECTS_ACTION_TYPES.SEND_SUBJECTS:
      return state;

    default:
      return state;
  }
};