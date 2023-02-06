// set up state / setter function to manage searchQuery
// set up event handler and listener
// set up filtering logic for displaying projects whose names that match searchQuery

import { useState } from 'react';

import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects }) => {

  // set up state / setter function
  const [ searchQuery, setSearchQuery ] = useState("");

// .filter and .map return new arrays

  // apply filtering logic
  const filteredListItems = projects.filter(project => {
  
    // only return projects whose names partially match searchQuery
    // "project.name" vs "searchQuery"
    // want to flatten all project names and searchQueries

    return project.name.toLowerCase().includes(searchQuery.toLowerCase());
  })

  const projectListItems = filteredListItems.map(project => (
    <ProjectListItem key={project.id} {...project} />
  ));

  function handleSearch(e) {

    // invoking setter function
    setSearchQuery(e.target.value)
  }

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input type="text" 
      placeholder="Search..."
      onChange={handleSearch}
      />

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
