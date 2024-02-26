const TableHead = ({ isSplitted }) => {
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
                <th>Подгруппа 2</th>
              </>
            )
            : (
              <th>Преподаватель+</th>
            )
        }
      </tr>
    </thead>
  )
}

export default TableHead;