import { Route, Routes } from 'react-router-dom';
import Home from './Compornents/Home/Home';
import Blogs from './Compornents/Pages/Blogs';
import Services from './Compornents/Pages/Product/Services';
import Shop from './Compornents/Pages/Shop';
import Footer from './Compornents/Shared/Footer';
import Header from './Compornents/Shared/Header';
import DetailsService from './Compornents/Pages/Product/DetailsService'
import ServiceThreeDetails from './Compornents/Pages/Product/ServiceThreeDetails';
import ServiceThree from './Compornents/Pages/ServiceThree';

function App() {
  return (
    <div className="pt-16">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/detailsService/:detailsId' element={<DetailsService></DetailsService>}></Route>
        <Route path='/serviceThree' element={<ServiceThree></ServiceThree>}></Route>
        <Route path='/serviceThree/serviceThreeDetails' element={<ServiceThreeDetails></ServiceThreeDetails>}></Route>
      </Routes>

      <Footer />
      
    </div>
  );
}

export default App;
