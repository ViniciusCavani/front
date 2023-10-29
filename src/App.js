import React, { useState } from 'react';
import Login from './views/Login';
import Dashboard from './views/Dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      {loggedIn ? (
        <Dashboard setLoggedIn={setLoggedIn} />
      ) : (
        <Login setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
}

export default App;
