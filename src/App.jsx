import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
// import Card from './components/Card';

function App() {
  const receiveRequest = (name) => {
    console.log(`message received ${name.name}`)
  }

  return  (
    <div>
      <Header />
      <Navbar />
      <AboutMe />
      <Portfolio />
      <Contact 
        onSubmit={receiveRequest}
      />
      <Resume />
      {/* <Card />
      <Card />
      <Card /> */}
    </div>
  );
}

export default App;
