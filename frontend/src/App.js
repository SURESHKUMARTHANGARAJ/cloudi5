import React, { useEffect } from 'react';
import './assets/style/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() { 

  useEffect(() => {
    AOS.init({  
      duration: 1000,
      once: true, 
    });
  }, []);

  return (
   <Home />
  );
}

export default App;
