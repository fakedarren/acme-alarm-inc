import React from 'react';

import Form from '../../components/Form';
import List from '../../components/List';

import './App.scss';

function App() {
  return (
    <div className="page-wrapper">
      <header className="header">
        <div className="container">
          <h1>Super mega alarm setting thing</h1>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <Form />
          <List />
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; Darren Waddell 2020</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
