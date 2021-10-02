import FadeIn from './components/utility/FadeIn';
import React, { useEffect } from 'react';
import './App.css';


function App() {

  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <FadeIn className="jumbo">
        Heading 1
      </FadeIn>
    </div>
  );
}

export default App;
