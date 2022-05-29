import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./singlePages/home/HomePage";
import BlogPage from "./singlePages/blog/BlogPage";
import ContactPage from "./singlePages/pages/ContactPage";
import AboutPage from "./singlePages/pages/AboutPage";
import ProductPage from "./singlePages/products/ProductPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="blogs" element={<BlogPage />} />
          <Route path="pages/about" element={<AboutPage />} />
          <Route path="pages/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
