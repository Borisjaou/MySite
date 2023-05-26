import React, { Suspense, lazy } from 'react';
import './App.scss';
/* import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
 */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from '../Loader/Loader'


const Header = lazy(() => import('../Header/Header'));
const MainPage = lazy(() => import('../MainPage/MainPage'));
const About = lazy(() => import('../About/About'));
const Projects = lazy(() => import('../Projects/Projects'));
const Footer = lazy(() => import('../Footer/Footer'));

function App() {
  const [isLoading, setIsLoading] = React.useState(true)
  React.useState(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  })

  return (
    isLoading ? <Loader /> : (
      <Suspense fallback={<Loader />}>
        <main className='foo'>
          <Header />
          <BrowserRouter>
            <Routes >
              <Route path='/' element={
                <MainPage />
              }
              />
              <Route path='foo' element={<About />} />
              <Route path='joo' element={<Projects />} />
            </Routes>
          </BrowserRouter>
          <Footer />


        </main >
      </Suspense>
    )
  );
}

export default App;
