import { Routes, Route, useLocation } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home"
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { AnimatePresence } from "framer-motion/dist/framer-motion";


const App = () => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
    </AnimatePresence>
  )
}

export default App;