import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/header";
import Layout from "./component/layout";
import Home from "./pages/home";
import ProductItem from "./pages/productItems";

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cartItems/:id" element={<ProductItem />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
