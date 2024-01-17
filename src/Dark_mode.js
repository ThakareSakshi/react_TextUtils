import React from 'react'
import { useState,useEffect } from 'react';

const Dark_mode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      // Check for user's preference in local storage
      const storedMode = localStorage.getItem('darkMode');
      setIsDarkMode(storedMode === 'true');
    }, []);
  
    const toggleDarkMode = () => {
      const newMode = !isDarkMode;
      setIsDarkMode(newMode);
      localStorage.setItem('darkMode', newMode);
      if(newMode){
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        
      }else{
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
      }
    };
  
    return (
      <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <header>
        
          <button onClick={toggleDarkMode}>
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </header>
        {/* Your application content goes here */}
      </div>
    );
}

export default Dark_mode
