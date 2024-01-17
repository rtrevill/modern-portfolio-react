import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
// import Card from './components/Card';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return  (
    <div>
      <Header />
      <Navbar />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Resume />
      {/* <Card />
      <Card />
      <Card /> */}
    </div>
  );
}

export default App;
