import React from 'react';
import './App.scss';

import Header from './components/Header';
import DashboardSummary from './components/Dashboard/DashboardSummary';
import DashboardOverview from './components/Dashboard/DashboardOverview';
import Attribution from './components/Attribution';
import Container from './components/Container';

function App() {
  return (
    <div>
      <Container>
        <Header />
        <DashboardSummary />
        <DashboardOverview />
      </Container>
      <Attribution />
    </div>
  );
}

export default App;
