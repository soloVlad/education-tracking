import { useDispatch, useSelector } from "react-redux";

import { selectTeachers } from '@store/subjects/subjects.selector';
import { updateSubjectInfo } from "@store/subjects/subjects.action";

import classes from './index.module.scss';

const TeachersSelect = ({
  subjectId,
  podgroupId,
  podgroupPropName,
  initialValue,
  disabled = false
}) => {
  const teachers = useSelector(selectTeachers);

  const dispatch = useDispatch();

  const handleTeacherChange = (event) => {
    dispatch(
      updateSubjectInfo(subjectId, podgroupId, podgroupPropName, event.target.value)
    );
  }

  return (
    <select
      className={classes.select}
      disabled={disabled}
      defaultValue={initialValue?.id ?? ''}
      onChange={handleTeacherChange}
    >
      <option
        className={classes.option}
        value="Вакансия"
      >
        Вакансия
      </option>

      {teachers.map(teacher => (
        <option
          className={classes.option}
          key={teacher.id}
          value={teacher.id}
        >
          {teacher.name}
        </option>
      ))}
    </select>
  )
}

export default TeachersSelect;