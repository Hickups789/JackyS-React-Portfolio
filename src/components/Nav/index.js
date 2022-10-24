import React from 'react';
//import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav({setSection}) {

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label=""></span> Jacqueline Turnmeyer
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2" onClick={() => setSection("About")}>
            <a data-testid="about" href="#about" onClick={() => setSection("About")}>
              About me
            </a>
          </li>
          <li className="mx-2" onClick={() => setSection("Contact")}>
            <a data-testid="contact" href="#contact" onClick={() => setSection("Contact")}>
              Contact
            </a>
          </li>
          <li className="mx-2" onClick={() => setSection("Projects")}>
            <a data-testid="projects" href="#projects" onClick={() => setSection("Projects")}>
              Projects
            </a>
          </li>

         
        </ul>
      </nav>
    </header>
  );
}

export default Nav;