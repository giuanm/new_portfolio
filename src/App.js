import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Componentes

// Páginas
import Home from './pages/Home';
import Professional from './pages/Professional';
import Personal from './pages/Personal'
import FirstPage from './pages/FirstPage';
import Footer from './components/Footer';
import CreatePostForm from './components/personal/CreatePostForm'
import CreatePostFormProf from './components/professional/CreatePostFormProf'
import EditPostForm from './components/personal/EditPostForm';
import EditPostFormProf from './components/professional/EditPostFormProf';

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
            <Route path='/new_portfolio/createPost' element={< CreatePostForm />}/>
            <Route path='/new_portfolio/createPostProf' element={< CreatePostFormProf />}/>
            <Route path='/new_portfolio/editPost' element={< EditPostForm />}/>
            <Route path='/new_portfolio/editPostProf' element={< EditPostFormProf />}/>
          </Routes>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
