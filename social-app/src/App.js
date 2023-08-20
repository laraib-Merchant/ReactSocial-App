import { useEffect, useState } from "react";
import PostCard from "./components/postcard/PostCard";
import './style.css';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
      const storedDarkMode = localStorage.getItem('darkMode');
      if (storedDarkMode === 'true') {
        setDarkMode(true);
      }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      console.log("dark mode on");
      document.documentElement.classList.add('dark-mode');
      document.documentElement.style.backgroundColor = '#000000';
    } else {
      console.log("light mode on");
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.style.backgroundColor = '#ffffff';
    }
  }, [darkMode]);
  


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.style.backgroundColor = darkMode ? '#ffffff' : '#000000';
  };



  return (
    <>
      <button className="dark-mode-button" onClick={toggleDarkMode}>
        {darkMode ? '☀️' : '🌙'}
      </button>

      <div className="App">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </>
    
  );
}

export default App;
