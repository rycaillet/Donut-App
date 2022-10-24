import './App.css'
import Home from './pages/Home'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import ViewDonutShops from './pages/ViewDonutShops'

function App() {
  return (
    <div className="DonutApp">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donutShops" element={<ViewDonutShops />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
