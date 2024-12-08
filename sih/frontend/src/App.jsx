import React from 'react';
import Dashboard from './components/RI/RIDashboard'; // Import the Dashboard component
import './App.css'; // Optional: Any additional global styles
import RPDashboard from './components/RP/Dashboard';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      {/* Render the Dashboard component */}
      {/* <Dashboard /> */}
      <RPDashboard/>
    </div>
  );
}

export default App;
