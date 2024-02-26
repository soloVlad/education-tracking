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

    case SUBJECTS_ACTION_TYPES.UPDATE_PODGROUP:
      const { subjectId, podgroupId, podgroupPropName, value } = payload;

      const updatedSubjects = state.subjects.map(subject => {
        if (subject.uniqueId === subjectId) {
          subject.podgroups[podgroupId][podgroupPropName] = value;
        }

        return subject;
      })
      return { ...state, subjects: updatedSubjects }

    case SUBJECTS_ACTION_TYPES.UPDATE_SUBJECT:
      const subjectsWithUpdatedItem = state.subjects.map(subject => {
        if (subject.uniqueId === payload.subjectId) {
          subject[payload.propName] = payload.value;
        }

        return subject;
      });
      return { ...state, subjects: subjectsWithUpdatedItem }

    case SUBJECTS_ACTION_TYPES.ADD_PODGROUP:
      const subjectsWithAddedPodgroup = state.subjects.map(subject => {
        if (subject.uniqueId === payload.subjectId) {
          subject.podgroups.push(payload.podgroupObj);
        }

        return subject;
      });
      return { ...state, subjects: subjectsWithAddedPodgroup };

    case SUBJECTS_ACTION_TYPES.REMOVE_PODGROUP:
      const subjectsWithRemovedPodgroup = state.subjects.map(subject => {
        if (subject.uniqueId === payload.subjectId) {
          subject.podgroups.pop();
        }

        return subject;
      });
      return { ...state, subjects: subjectsWithRemovedPodgroup };

    default:
      return state;
  }
};