import { useState } from 'react';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';

import { updateSubject, updatePodgroupInfo } from '@store/subjects/subjects.action';

import { TableHead, TableRow } from './components';

import classes from './index.module.scss';

const DetailsTable = ({ subject }) => {
  const isSplitted = subject.podgroups.length > 1;

  const [additionalInfo, setAdditionalInfo] = useState(subject.additionalInfo);
  const [firstStudents, setFirstStudents] = useState(subject.podgroups[0]?.countStudents);
  const [secondStudents, setSecondStudents] = useState(subject.podgroups[1]?.countStudents);

  const dispatch = useDispatch();

  const debouncedUpdateAdditionalInfo = debounce((value) => {
    dispatch(updateSubject(subject.uniqueId, 'additionalInfo', value))
  }, 300);

  const handleAreaChange = (event) => {
    setAdditionalInfo(event.target.value);
    debouncedUpdateAdditionalInfo(event.target.value);
  }

  const debouncedUpdateStudentsAmount = debounce((value, podgroupId) => {
    dispatch(updatePodgroupInfo(subject.uniqueId, podgroupId, 'countStudents', value))
  })

  const handleStudentsChange = (event, podgroupId) => {
    const value = event.target.value;

    if (podgroupId === 0) {
      setFirstStudents(value);
      debouncedUpdateStudentsAmount(value, 0);
    } else {
      setSecondStudents(value);
      debouncedUpdateStudentsAmount(value, 1);
    }
  }

  return (
    <table className={classes.table}>
      <TableHead isSplitted={isSplitted} />

      <tbody>
        <TableRow
          subject={subject}
          rowTitle="Лекции"
          propName="lecturesHours"
          podgroupPropName="lectureTeacher"
        />

        <TableRow
          subject={subject}
          rowTitle="Лабораторные занятия"
          propName="laboratoryHours"
          podgroupPropName="laboratoryTeacher"
        />

        <TableRow
          subject={subject}
          rowTitle="Практические"
          propName="practicHours"
          podgroupPropName="practiceTeacher"
        />

        <TableRow
          subject={subject}
          rowTitle="Семинарские"
          propName="seminarHours"
          podgroupPropName="seminarTeacher"
        />

        <TableRow
          subject={subject}
          rowTitle="Зачет"
          propName=""
          podgroupPropName="offsetTeacher"
          condition={subject.offset}
        />

        <TableRow
          subject={subject}
          rowTitle="Экзамен"
          propName=""
          podgroupPropName="examTeacher"
          condition={subject.exam}
        />

        {isSplitted && (
          <tr>
            <td>Количество человек</td>
            <td></td>
            <td>
              <input
                className={classes.input}
                type="text"
                value={firstStudents}
                onChange={(event) => handleStudentsChange(event, 0)}
              />
            </td>
            <td>
              <input
                className={classes.input}
                type="text"
                defaultValue={subject.podgroups[1].countStudents}
                value={secondStudents}
                onChange={(event) => handleStudentsChange(event, 1)}
              />
            </td>
          </tr>
        )}

        <tr>
          <td>Примечания</td>
          <td></td>
          <td colSpan={2}>
            <textarea
              value={additionalInfo}
              onChange={handleAreaChange}
            />
          </td>
        </tr>
      </tbody>
    </table >
  )
}

export default DetailsTable;