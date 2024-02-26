import { useDispatch } from "react-redux";
import { IconPlus, IconTrashFilled } from "@tabler/icons-react";

import { addPodgroup, updatePodgroupInfo } from "@store/subjects/subjects.action";

import classes from './index.module.scss';

const TableHead = ({ subject, isSplitted }) => {
  const dispatch = useDispatch();

  const handleAddClick = () => {
    const podgroupStudentsAmount = subject.studentsNumber / 2;

    const newPodgroup = structuredClone(subject.podgroups[0]);
    newPodgroup.countStudents = Math.floor(podgroupStudentsAmount);

    dispatch(addPodgroup(subject.uniqueId, newPodgroup));
    dispatch(updatePodgroupInfo(
      subject.uniqueId,
      0,
      'countStudents',
      Math.ceil(podgroupStudentsAmount)
    ));
  }

  const handleRemoveClick = () => {

  }

  return (
    <thead>
      <tr>
        <th>Занятия</th>
        <th>Часы</th>
        {
          isSplitted
            ? (
              <>
                <th>Подгруппа 1</th>
                <th>
                  <div className={classes.buttonWrapper} onClick={handleRemoveClick}>
                    <span>Подгруппа 2</span>
                    <IconTrashFilled size={18} />
                  </div>
                </th>
              </>
            )
            : (
              <th>
                <div className={classes.buttonWrapper} onClick={handleAddClick}>
                  <span>Преподаватель</span>
                  <IconPlus size={20} />
                </div>
              </th>
            )
        }
      </tr>
    </thead>
  )
}

export default TableHead;