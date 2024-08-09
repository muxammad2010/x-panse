import './App.css'
import Header from "../src/components/header/Header"
import Home from "../src/pages/home/Home"
import Feed from "../src/pages/feedback/Feed"
import About from "../src/pages/about/About"
import Product from "../src/pages/product/Product"
import Pricing from "../src/pages/pricing/Pricing"
import Services from "../src/pages/services/Services"
import Features from "../src/pages/features/Features"
import Footer from "../src/components/footer/Footer"
function App() {

  return (
    <>
      <Header />
      <Home />
      <Feed />
      <About />
      <Product />
      <Pricing />
      <Services />
      <Features />
      <Footer />
    </>
  )
}

export default App
