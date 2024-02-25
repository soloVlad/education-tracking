import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card } from "@components";
import { fetchSubjectsStartAsync } from "@store/subjects/subjects.action";
import { selectIsSubjectsFetching, selectSubjects, selectTeachers } from "@store/subjects/subjects.selector";

import './scss/app.scss';

const App = () => {
  const dispatch = useDispatch();

  const subjects = useSelector(selectSubjects);
  const teachers = useSelector(selectTeachers);
  const isLoading = useSelector(selectIsSubjectsFetching);

  useEffect(() => {
    dispatch(fetchSubjectsStartAsync())
  }, []);

  console.log(subjects);
  console.log(teachers);
  console.log(isLoading);

  return (
    <>
      <Card />
      <Card />
    </>
  )
}

export default App
