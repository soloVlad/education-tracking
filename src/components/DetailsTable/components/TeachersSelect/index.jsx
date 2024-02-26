import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import { selectTeachers } from '@store/subjects/subjects.selector';
import { updatePodgroupInfo } from "@store/subjects/subjects.action";

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
      updatePodgroupInfo(subjectId, podgroupId, podgroupPropName, event.value)
    );
  }

  const options = [
    { value: '', label: 'Вакансия' },
    ...teachers.map(teacher => ({ value: teacher.id, label: teacher.name })),
  ]

  return (
    <Select
      styles={{
        option: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: state.isSelected && classes.grayBlue,
          color: state.isSelected && classes.textColor,
        })
      }}
      classNames={{
        option: (state) => classes.option,
      }}
      options={options}
      defaultValue={initialValue || options[0]}
      contentEditable={false}
      onChange={handleTeacherChange}
      isDisabled={disabled}
    />
  )
}

export default TeachersSelect;