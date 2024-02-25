import classes from './index.module.scss';

const InfoLine = ({ title, value }) => {
  return (
    <div className={classes.info}>
      <b>{title}</b>
      <p>{value}</p>
    </div>
  )
}

const Info = ({ group, course, amountOfStudents, semester }) => {
  return (
    <div className={classes.infoWrapper}>
      <InfoLine title='Группа' value={group} />
      <InfoLine title='Курс' value={course} />
      <InfoLine title='Количество курсантов' value={amountOfStudents} />
      <InfoLine title='Семестр' value={semester} />
    </div>
  )
}

export default Info;