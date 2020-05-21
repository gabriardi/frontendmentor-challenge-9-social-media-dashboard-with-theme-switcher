import React from 'react';
import './App.scss';

import Header from './components/Header';
import Dashboard from './components/Dashboard';
import OverviewToday from './components/OverviewToday';
import Attribution from './components/Attribution';
import Container from './components/Container';

function App() {
  return (
    <div>
      <Container>
        <Header />
        <Dashboard />
        <OverviewToday />
      </Container>
      <Attribution />
    </div>
  );
}

export default App;
