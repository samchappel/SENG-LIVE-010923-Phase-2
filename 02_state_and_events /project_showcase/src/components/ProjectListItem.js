// state is managed WITHIN components
// props are managed ACROSS components

// set up state / setter function
// add event handler to clap <button>
// set up handler function to clearly contain behavior

import { useState } from 'react';

const ProjectListItem = ({ id, about, image, link, name, phase }) => {

  // set up state / setter function
  const [ clapCount, setClapCount ] = useState(0);

  // set up handler function
  function handleClick() {
    // how do we properly increment clapCount up by one each time <button> is clicked?
    // clapCount++ would directly mutate state
    // using setter function: setClapCount(claptCount +1) - not using any reference to a previous value
    // BEST PRACTICE to incrementing state: 
      // where previous values of state are implicitly passed in to setter function callbacks
    setClapCount(prevCount => prevCount + 1)
  }

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button onClick={handleClick} className="claps">👏{clapCount}</button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
      </footer>
    </li>
  );
};

export default ProjectListItem;
