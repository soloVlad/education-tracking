import { useState } from 'react';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';

import { updateSubject } from '@store/subjects/subjects.action';

import { TableHead, TableRow } from './components';

import classes from './index.module.scss';

const DetailsTable = ({ subject }) => {
  const isSplitted = subject.podgroups.length > 1;

  console.log(subject.additionalInfo);
  const [additionalInfo, setAdditionalInfo] = useState(subject.additionalInfo);

  const dispatch = useDispatch();

  const debouncedUpdateAdditionalInfo = debounce((value) => {
    dispatch(updateSubject(subject.uniqueId, 'additionalInfo', value))
  }, 300);

  const handleAreaChange = (event) => {
    setAdditionalInfo(event.target.value);
    debouncedUpdateAdditionalInfo(event.target.value);
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
                defaultValue={subject.podgroups[0].countStudents}
              />
            </td>
            <td>
              <input
                className={classes.input}
                type="text"
                defaultValue={subject.podgroups[1].countStudents}
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