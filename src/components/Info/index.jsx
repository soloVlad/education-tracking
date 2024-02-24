import classes from './index.module.scss';

const InfoLine = ({ key, value }) => {
  return (
    <div className={classes.info}>
      <b>{key}</b>
      <p>{value}</p>
    </div>
  )
}

const Info = ({ group, course, amountOfStudents, semester }) => {
  return (
    <div className={classes.infoWrapper}>
      <InfoLine key='Группа' value={group} />
      <InfoLine key='Курс' value={course} />
      <InfoLine key='Количество курсантов' value={amountOfStudents} />
      <InfoLine key='Семестр' value={semester} />
    </div>
  )
}

export default Info;