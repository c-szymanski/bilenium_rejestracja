import React from 'react';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <h1 className='header'>WALK-A-DOG</h1>
      <form className>
        <input type="text" placeholder="login" />
        <input type="text" placeholder="e-mail" />
        <input type="password" placeholder="hasło" />
        <input type="password" placeholder="potwierdź hasło" />
        <input type="submit" value="UTWÓRZ KONTO" />
      </form>
    </div>
  );
}

export default App;
