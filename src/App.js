import "./App.css";
import Navs from "./components/Header/navbar";
import Slider from "./components/home/slider";
import ProductList from "./components/home/productlist";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navs />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductList />
            </>
          }
        />

        
      </Routes>
    </>
  );
}

export default App;
