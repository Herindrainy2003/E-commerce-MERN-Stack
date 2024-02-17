
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Products from './Pages/Products';

function App() {
  return (
  
  <BrowserRouter>
     <Navbar />
      
        <Routes>
         
          <Route path='/' element = { <Shop /> }  />
          <Route path='/mens' element = { <ShopCategory /> }  category = "mens" />
          <Route path='/womans' element = { <ShopCategory /> } category = "womans" />
          <Route path='/kids' element = { <ShopCategory /> } category = "kids" />
          <Route path='/product' element= {<Products />}>
            <Route path=':productId' element ={<Products />} />
          </Route>
          <Route path='/cart' element = { <Cart /> }  />
          <Route path='/login' element = { <LoginSignup /> } />
      
        </Routes>
      
       
    </BrowserRouter>
  );
}


export default App;
