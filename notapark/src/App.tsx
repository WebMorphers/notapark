import "./App.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Footer from "./components/footer/footer";
import Products from "./components/products/products";
import About from "./components/about/about";
import Deliv from "./components/deliv/deliv";
import Insta from "./components/insta";
import Abt from "./components/abt/abt";

function App() {
  return (
    <>
      <Navbar />
      <Insta />
      <div className="body flex flex-col gap-10 lg:gap-20">
        <Hero />
        <Products />
      </div>
      <Deliv />
      <Abt />
      <About />
      <Footer />
    </>
  );
}

export default App;
