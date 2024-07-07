import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="content">
        {/* Add your other content here */}
      </div>
    </>
  );
}

export default App;