import { IconPlus, IconTrashFilled } from "@tabler/icons-react";

import classes from './index.module.scss';

const TableHead = ({ isSplitted }) => {
  const handleAddClick = () => {

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