import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import { Container } from '@mui/material';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Search from './Pages/Search/Search';
import Rate from './Pages/Rate/Rate';
import Series from './Pages/Series/Series';

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="app">
          <Container>
            <Routes>
              <Route path='/' element={<Trending />} />
              <Route path='/movies' element={<Movies />} />
              <Route path='/series' element={<Series />} />
              <Route path='/search' element={<Search />} />
              <Route path='/rate' element={<Rate />} />
            </Routes>
          </Container>
        </div>

        <Navbar />
      </Router>
    </>
  );
}

export default App;
