import { useState } from 'react'

const navigation = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang', href: '/about' },
  { label: 'Portofolio', href: '/portfolio' },
  { label: 'Project', href: '/projects' },
]

const landingNavigation = [
  { label: 'Platform', href: '#platform' },
  { label: 'Cara kerja', href: '#alur' },
]

export function Brand({ light = false }) {
  return (
    <a className={`brand${light ? ' brand--light' : ''}`} href="/" aria-label="Beranda Sigma Lab">
      <img className="brand__mark" src="/sigma-logo.svg" alt="" />
      <span className="brand__name">SIGMA <b>LAB</b></span>
    </a>
  )
}

export function Header({ pathname }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const isLandingPage = pathname === '/'
  const links = isLandingPage ? landingNavigation : navigation

  return (
    <header className={`site-header${isLandingPage ? ' site-header--landing' : ''}`}>
      <div className="site-header__inner">
        <Brand light={!isLandingPage} />
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`site-nav${menuOpen ? ' site-nav--open' : ''}`} aria-label="Navigasi utama">
          {links.map(({ label, href }) => (
            <a
              key={href}
              className={pathname === href ? 'site-nav__link is-active' : 'site-nav__link'}
              href={href}
              aria-current={pathname === href ? 'page' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          {isLandingPage ? (
            <>
              <a className="site-nav__link" href="/login" onClick={() => setMenuOpen(false)}>Masuk</a>
              <a className="header-cta" href="/register" onClick={() => setMenuOpen(false)}>
                Daftar <span aria-hidden="true">↗</span>
              </a>
            </>
          ) : (
            <a className="header-cta" href="/projects#request">Ajukan ide <span aria-hidden="true">↗</span></a>
          )}
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__intro">
          <Brand />
          <p>Belajar, berkarya, dan membangun solusi digital bersama.</p>
        </div>
        <div className="site-footer__links">
          <h2>Jelajahi Sigma Lab</h2>
          <a href="/about">Tentang kami <span aria-hidden="true">↗</span></a>
          <a href="/portfolio">Portofolio <span aria-hidden="true">↗</span></a>
          <a href="/projects">Project <span aria-hidden="true">↗</span></a>
        </div>
        <div className="site-footer__contact">
          <span className="eyebrow">PUNYA IDE?</span>
          <h2>Mari buat sesuatu yang berdampak.</h2>
          <a className="text-link text-link--light" href="/projects#request">Ceritakan idemu <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} Sigma Lab</span>
        <span>Belajar bersama. Berkarya nyata.</span>
      </div>
    </footer>
  )
}

export function PageIntro({ eyebrow, title, description, centered = false, headingLevel = 2 }) {
  const Heading = `h${headingLevel}`

  return (
    <div className={`page-intro${centered ? ' page-intro--centered' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Heading>{title}</Heading>
      {description && <p>{description}</p>}
    </div>
  )
}

export function DashboardArt({ compact = false }) {
  return (
    <img
      className={`generated-art${compact ? ' generated-art--compact' : ''}`}
      src={compact
        ? '/assets/about-hero-team-learning-primary.png'
        : '/assets/home-hero-team-collaboration-primary.png'}
      alt=""
      aria-hidden="true"
    />
  )
}

export function RequestForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <form className="request-form" onSubmit={handleSubmit}>
      <h3>{submitted ? 'Terima kasih!' : 'Formulir ide project'}</h3>
      {submitted ? (
        <p className="form-success" role="status">
          Terima kasih! Form ini belum terhubung ke layanan pengiriman, jadi permintaanmu belum terkirim.
        </p>
      ) : (
        <>
          <label>
            Nama Project
            <input name="projectName" placeholder="Contoh: Website Profil Himpunan" required />
          </label>
          <label>
            Deskripsi singkat
            <textarea name="description" placeholder="Ceritakan ide dan tujuan projectmu" rows="3" required />
          </label>
          <div className="request-form__row">
            <label>
              Nama
              <input name="name" placeholder="Nama kamu" required />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="nama@email.com" required />
            </label>
          </div>
          <button className="button button--primary button--full" type="submit">
            Kirim request <span aria-hidden="true">↗</span>
          </button>
          <p className="form-note">Kami akan menghubungimu untuk membahas ide ini lebih lanjut.</p>
        </>
      )}
    </form>
  )
}
