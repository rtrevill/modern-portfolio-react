// import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
// import AboutMe from './components/AboutMe';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Resume from './components/Resume';
// import Card from './components/Card';
import { Outlet } from 'react-router-dom';

function App() {
//   const receiveRequest = (name) => {
//     console.log(`message received ${name.name}`)
//   }

  return  (
    <div>
      <>
      <Header />
      <Outlet />
      <Footer />
      </>
    </div>
  );
}

export default App;
