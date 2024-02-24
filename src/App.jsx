import { useEffect } from "react";

import { Card } from "@components";

import './scss/app.scss';

const App = () => {
  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await fetch('https://bgaa.by/test');
  //     const data = await response.json();

  //     console.log(data);
  //   }

  //   getData();
  // }, []);

  return (
    <>
      <Card />
      <Card />
    </>
  )
}

export default App
