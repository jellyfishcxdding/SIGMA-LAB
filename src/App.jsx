import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portofolio.jsx'
import Projects from './pages/Project.jsx'
import { Footer, Header } from './components/SiteLayout.jsx'
import './App.css'

const routes = {
  '/': Home,
  '/about': About,
  '/portfolio': Portfolio,
  '/projects': Projects,
}

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  const Page = routes[pathname] || Home

  return (
    <>
      <Header pathname={pathname} />
      <main className={pathname === '/' ? 'main--landing' : undefined}>
        <Page />
      </main>
      <Footer />
    </>
  )
}

export default App
