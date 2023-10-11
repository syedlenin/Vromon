// gitURL = https://github.com/CNSAKIB/Vromonn.git

import { BrowserRouter, Routes, Route} from 'react-router-dom';

// pages & components
import Home from './Pages/Home';
import Header from './Component/Navbar/Header';
import PackageForm from './Pages/PackageForm';
import Product from './Pages/product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route
              path="/PackageForm"
              element={ <PackageForm />}
            />
            <Route
              path="/product"
              element={ <Product />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
