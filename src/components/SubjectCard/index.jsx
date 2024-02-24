import { IconBookFilled } from '@tabler/icons-react';
import classes from './index.module.scss';

const obj = {
  "subjectName": "Авиационная электроника и цифровые устройства",
  "groupName": "П120",
  "studentsNumber": "22",
  "course": "4",
  "semestr": "7",

  "lecturesHours": "50",
  "laboratoryHours": "10",
  "practicHours": "0",
  "seminarHours": "0",
  "exam": true,
  "offset": false,
  "additionalInfo": "Пары кроме субботы",
  "countPodgroups": "1",
  "uniqueId": "65da2c3d45e66",
  "podgroups": [
    {
      "countStudents": "22",
      "laboratoryTeacher": "",
      "lectureTeacher": "",
      "practiceTeacher": "",
      "seminarTeacher": "",
      "examTeacher": "",
      "offsetTeacher": ""
    }
  ]
}

const SubjectCard = () => {
  return (
    <div className={classes.card}>
      <div className={classes.title}>
        <IconBookFilled
          color={classes.darkBlue}
          size={20}
        />

        <strong>{obj.subjectName}</strong>
      </div>


    </div>
  )
}

export default SubjectCard;