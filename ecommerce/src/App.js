import logo from './logo.svg';
import './App.css';
import Navcomp from './Components/Navcomp';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Main from './Home/Main';
import MainSub from './ShopAll/MainSub';
import Productroute from './ProductDetails/Productroute';
import CartPage from './Cart/CartPage';
import Maincheck from './Checkout/Maincheck';
import { SuccessPage } from './Checkout/SuccessPage';
import CancelPage from './Checkout/CancelPage';
import Login from "./Login/Signin";
import Signup from './Login/Signup';


function App() {
  return (
    <div className="App">
      <Router>
        <Navcomp/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/shopall' element={<MainSub/>}/>
          <Route path='/products/:product_id' element={<Productroute/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/checkout' element={<Maincheck/>}/>
          <Route path='/success' element={<SuccessPage/>}/>
          <Route path='/cancel' element={<CancelPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
