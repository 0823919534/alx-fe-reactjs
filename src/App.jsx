import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Beverley" age="32" bio="Homeschooler & aspiring dev" />
      <Counter />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
