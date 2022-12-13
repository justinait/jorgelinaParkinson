import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './components/About/About';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path='/' element={< Home />} />
        <Route path='/about' element={< About />} />

      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
