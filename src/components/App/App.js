
import './App.scss';
import Header from '../Header/Header';
import Introduction from '../Introduction/Introduction';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <main className='foo'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Introduction />}

          />
          <Route path='foo' element={<About />} />
          <Route path='joo' element={<Projects />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </main >
  );
}

export default App;
