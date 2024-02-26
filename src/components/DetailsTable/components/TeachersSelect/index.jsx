import { useSelector } from "react-redux";

import { selectTeachers } from '@store/subjects/subjects.selector';

import classes from './index.module.scss';

const TeachersSelect = ({ initialValue, disabled = false }) => {
  const teachers = useSelector(selectTeachers);

  return (
    <select className={classes.select} disabled={disabled}>
      <option
        className={classes.option}
        value="Вакансия"
        selected={!initialValue}
      >
        Вакансия
      </option>

      {teachers.map(teacher => (
        <option
          className={classes.option}
          key={teacher.id}
          value={teacher.id}
          selected={initialValue?.id === teacher.id}
        >
          {teacher.name}
        </option>
      ))}
    </select>
  )
}

export default TeachersSelect;