import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Invest from './pages/Invest/Invest'
import Blog from './pages/Blog/Blog'
// import NavBar from './components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

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
            </Routes>
          </BrowserRouter>
      </div>

    </>
  )
}

export default App
