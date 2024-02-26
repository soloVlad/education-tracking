import TeachersSelect from "../TeachersSelect";

const TableRow = ({
  subject,
  rowTitle,
  propName,
  podgroupPropName,
  condition = true
}) => {
  const isSplitted = subject.podgroups.length > 1;

  return condition && (
    <tr>
      <td>{rowTitle}</td>
      <td>{subject[propName]}</td>
      <td>
        <TeachersSelect
          disabled={+subject[propName] === 0}
          initialValue={subject.podgroups[0][podgroupPropName]}
        />
      </td>

      {isSplitted && (
        <td>
          <TeachersSelect
            disabled={+subject[propName] === 0}
            initialValue={subject.podgroups[1][podgroupPropName]}
          />
        </td>
      )}
    </tr>
  )
}

export default TableRow;