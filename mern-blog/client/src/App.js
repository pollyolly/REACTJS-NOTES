import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ArticleList from './pages/ArticleList'
import Navbar from './components/Navbar'
import Article from './pages/Article'
import Notfound from './pages/Notfound'

function App() {
  return (
    <Router>
      <Navbar/>
    <div className="max-w-screen-md mx-auto pt-20">
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/article/:name' element={<Article/>} />
        <Route path='/articlelist' element={<ArticleList />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App