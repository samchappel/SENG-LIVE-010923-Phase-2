// set up state / setter function
// set up helper function
// set up event listener on <button>

// import { useState } from 'react';

const Header = ({ isDarkMode, handleClick }) => {

  // set up state and setter function
  // const [ stateVariable, stateSetter ] = useState(initialValue);
  // array destructuring ^
  // invocation of useState will return an array
  // const [ isDarkMode, isDarkModeSetter ] = useState(true);
  // we originally declared state here inside the Header component but lifted state to the App component so more than just the Header is re-rendered when state changes

// function handleClick() {
//   isDarkModeSetter(!isDarkMode);
//   // bang operator says if isDarkMode is true, when handleClick is fired and setter function is invoked, take whatever the isDarkMode value is provide the opposite as the new value for the state
// }

const buttonContent = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>{buttonContent}</button>
    </header>
  );
}

export default Header;
