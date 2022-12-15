import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About/About';
import GalleryContainer from './components/GalleryContainer/GalleryContainer';
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path='/' element={< Home />} />
        
        <Route path='/about' element={< About />} />

        <Route path='/gallery' element={< Gallery />} />
        <Route path='/gallery/:gallery' element={< Gallery />} />
        
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
