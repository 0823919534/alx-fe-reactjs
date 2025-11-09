import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Jane Doe" age={30} bio="Loves coding and traveling." />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
