import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card } from "@components";
import { fetchSubjectsStartAsync, sendCurrentStateAsync } from "@store/subjects/subjects.action";
import { selectIsSubjectsFetching, selectSubjects } from "@store/subjects/subjects.selector";

import './scss/app.scss';

const App = () => {
  const dispatch = useDispatch();

  const subjects = useSelector(selectSubjects);
  const isLoading = useSelector(selectIsSubjectsFetching);

  const handleSaveClick = () => {
    dispatch(sendCurrentStateAsync());
  }

  useEffect(() => {
    dispatch(fetchSubjectsStartAsync())
  }, []);

  console.log(subjects);

  return (
    <>
      <div className="container">
        {isLoading
          ? <div>Loading</div>
          : subjects.map(subject => (
            <Card key={subject.uniqueId} subject={subject} />
          ))}
      </div>

      <button className="saveButton" onClick={handleSaveClick}>Сохранить</button>
    </>
  )
}

export default App
