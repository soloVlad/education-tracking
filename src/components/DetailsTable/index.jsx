import { useSelector } from 'react-redux';

import { selectTeachers } from '@store/subjects/subjects.selector';

import { TableHead } from './components';

import classes from './index.module.scss';

const TeachersSelect = ({ initialValue }) => {
  const teachers = useSelector(selectTeachers);

  console.log(teachers);

  return (
    <select className={classes.select}>
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

const DetailsTable = ({ subject }) => {
  console.log(subject);

  const isSplitted = subject.podgroups.length > 1;

  return (
    <table className={classes.table}>
      <TableHead isSplitted={isSplitted} />

      <tbody>
        <tr>
          <td>Лекции</td>
          <td>{subject.lecturesHours}</td>
          <td><TeachersSelect initialValue={subject.podgroups[0].lectureTeacher} /></td>
          {isSplitted && (
            <td><TeachersSelect initialValue={subject.podgroups[1].lectureTeacher} /></td>
          )}
        </tr>

        <tr>
          <td>Лабораторные занятия</td>
          <td>{subject.laboratoryHours}</td>
          <td><TeachersSelect initialValue={subject.podgroups[0].laboratoryTeacher} /></td>
          {isSplitted && (
            <td><TeachersSelect initialValue={subject.podgroups[1].laboratoryTeacher} /></td>
          )}
        </tr>

        <tr>
          <td>Практические</td>
          <td>{subject.practicHours}</td>
          <td><TeachersSelect initialValue={subject.podgroups[0].practiceTeacher} /></td>
          {isSplitted && (
            <td><TeachersSelect initialValue={subject.podgroups[1].practiceTeacher} /></td>
          )}
        </tr>

        <tr>
          <td>Семинарские</td>
          <td>{subject.seminarHours}</td>
          <td><TeachersSelect initialValue={subject.podgroups[0].seminarTeacher} /></td>
          {isSplitted && (
            <td><TeachersSelect initialValue={subject.podgroups[1].seminarTeacher} /></td>
          )}
        </tr>

        {subject.offset && (
          <tr>
            <td>Зачет</td>
            <td></td>
            <td><TeachersSelect initialValue={subject.podgroups[0].offsetTeacher} /></td>
            {isSplitted && (
              <td><TeachersSelect initialValue={subject.podgroups[1].offsetTeacher} /></td>
            )}
          </tr>
        )}

        {subject.exam && (
          <tr>
            <td>Экзамен</td>
            <td></td>
            <td><TeachersSelect initialValue={subject.podgroups[0].examTeacher} /></td>
            {isSplitted && (
              <td><TeachersSelect initialValue={subject.podgroups[1].examTeacher} /></td>
            )}
          </tr>
        )}

        <tr>
          <td>Примечания</td>
          <td></td>
          <td colSpan={2}>
            <textarea defaultValue={subject.additionalInfo} />
          </td>
        </tr>
      </tbody>
    </table >
  )
}

export default DetailsTable;