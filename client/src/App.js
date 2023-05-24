import './App.css'
import Home from './pages/Home'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import ViewDonutShops from './pages/ViewDonutShops'
import DonutShop from './components/DonutShop'
import DonutForm from './pages/DonutForm'
import UpdateDonut from './pages/UpdateDonut'

function App() {
  return (
    
    <div>
      <Nav />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donutShops" element={<ViewDonutShops />} />
          <Route path="/donutshops/:id" element={<DonutShop />} />
          <Route path="/donutshops/:id/donutForm" element={<DonutForm />} />
          <Route path="/donut/:donutId/update" element={<UpdateDonut />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
