import React, { useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';

function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="home">
      <header>
        <h1>BookMyStay</h1>
      </header>

      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li className="dropdown" onClick={toggleDropdown}>
            <a href="#">Locations</a>
            { (
              <ul className="dropdown-menu">
                <li><a href="#">Coimbatore</a></li>
                <li><a href="#">Chennai</a></li>
                <li><a href="#">Bangalore</a></li>
              </ul>
            )}
          </li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <main>
      
        <section>
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>

        <section>
          <h2>Our Services</h2>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;