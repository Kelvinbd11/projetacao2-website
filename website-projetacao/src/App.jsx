import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Invest from './pages/Invest/Invest'
import Blog from './pages/Blog/Blog'
import Projetacao from './pages/Projetacao/Projetacao'
import Ventiloar from './pages/Ventiloar/Ventiloar'
import Peneiras from './pages/Peneiras/Peneiras'

function App() {

  return (
    <>
      <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Projetacao" element={<Projetacao />} />
          <Route path="/Ventiloar" element={<Ventiloar />} />
          <Route path="/Peneiras" element={<Peneiras />} />
        </Routes>
      </BrowserRouter>
      </div>

    </>
  )
}

export default App
