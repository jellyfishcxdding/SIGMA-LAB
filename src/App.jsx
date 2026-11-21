import About from './pages/About.jsx'
import { Login, Register } from './pages/Auth.jsx'
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
  '/login': Login,
  '/register': Register,
}

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  const Page = routes[pathname] || Home
  const isAuthPage = pathname === '/login' || pathname === '/register'

  return (
    <>
      {!isAuthPage && <Header pathname={pathname} />}
      <main className={isAuthPage ? 'main--auth' : pathname === '/' ? 'main--landing' : undefined}>
        <Page />
      </main>
      {!isAuthPage && <Footer />}
    </>
  )
}

export default App
