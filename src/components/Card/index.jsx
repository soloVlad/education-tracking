import { IconBookFilled } from '@tabler/icons-react';

import { Info, DetailsTable } from '@components';

import classes from './index.module.scss';

const Card = ({ subject }) => {
  return (
    <div className={classes.card}>
      <div className={classes.title}>
        <IconBookFilled
          color={classes.darkBlue}
          size={20}
        />

        <strong>{subject.subjectName}</strong>
      </div>

      <Info
        group={subject.groupName}
        course={subject.course}
        amountOfStudents={subject.studentsNumber}
        semester={subject.semestr}
      />

      <div className={classes.tableContainer}>
        <DetailsTable subject={subject} />
      </div>
    </div>
  )
}

export default Card;