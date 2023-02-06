import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

import projects from "./projects";

import { useState } from 'react';
// import the useState Hook (boiler plate / built in function) ^


const App = () => {

  const [ isDarkMode, setDarkMode ] = useState(true);

  function handleClick() {
    setDarkMode(!isDarkMode);
  }

const theme = isDarkMode ? "App" : "App light"

  return (
    <div className={theme}>
      <Header 
        isDarkMode={isDarkMode}
        handleClick={handleClick}
      />
      <ProjectForm />
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
