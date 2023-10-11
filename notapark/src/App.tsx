 
import './App.css'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero' 
import Footer from './components/footer/footer'
import Products from './components/products/products'

function App() { 

  return (
      <> 
        <Navbar />
        <div className='body'>
          <Hero />
          <Products />
        </div>
        <Footer />

      </>
  )
}

export default App
