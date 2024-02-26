import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card } from "@components";
import { fetchSubjectsStartAsync } from "@store/subjects/subjects.action";
import { selectIsSubjectsFetching, selectSubjects } from "@store/subjects/subjects.selector";

import './scss/app.scss';

const App = () => {
  const dispatch = useDispatch();

  const subjects = useSelector(selectSubjects);
  const isLoading = useSelector(selectIsSubjectsFetching);

  useEffect(() => {
    dispatch(fetchSubjectsStartAsync())
  }, []);

  return (
    <>
      {isLoading
        ? <div>Loading</div>
        : subjects.map(subject => (
          <Card key={subject.uniqueId} subject={subject} />
        ))}
    </>
  )
}

export default App
