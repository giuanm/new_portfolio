import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Componentes
// import Navbar from './components/Navbar';

// Páginas
import Home from './pages/Home';
import Professional from './pages/Professional';
import Personal from './pages/Personal'
import FirstPage from './pages/FirstPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          {/* <Navbar />
          <hr /> */}
          <Routes>
            <Route path='/new_portfolio/' element={<FirstPage />}/>
            <Route path='/new_portfolio/home' element={< Home />}/>
            <Route path='/new_portfolio/professional' element={< Professional />} />
            <Route path='/new_portfolio/personal' element={< Personal />} />
          </Routes>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
