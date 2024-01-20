import Navbar from '../components/Navbar'

import '../styles/Header-Footer.css';


function Header() {
  return (
    <header className="header">
      <h1 id='headerLogo'>Header</h1>
      <div className='nav-container'>
      <Navbar />
      </div>
    </header>
  );
}

export default Header;
