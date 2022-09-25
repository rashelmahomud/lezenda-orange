import { Route, Routes } from 'react-router-dom';
import Home from './Compornents/Home/Home';
import Footer from './Compornents/Shared/Footer';
import Header from './Compornents/Shared/Header';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>

      <Footer />
      
    </div>
  );
}

export default App;
