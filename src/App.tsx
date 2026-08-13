import Navbar from '../components/Navbar';
// import {useState} from "react";
import {Routes, Route, useLocation} from "react-router";

function App() {
  const location = useLocation();
  const background = location.state?.backgroundLocation ?? null;

  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes location={background || location}> 
          <Route path="/" element={<ProductList />}> </Route>
        </Routes>
        {background && (
          <Routes>
            <Route path="/product/:id" element={<ProductDetails />}> </Route>
          </Routes>
        )}

      </div>
     </div>
  )
}

export default App
