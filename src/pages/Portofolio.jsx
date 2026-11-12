import { useState } from 'react'
import { PortfolioCard } from '../components/ProjectCards.jsx'
import { PageIntro } from '../components/SiteLayout.jsx'
import { portfolioProjects } from '../data/projects.js'

const categories = ['Semua', 'Web App', 'Mobile', 'IoT']

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const visibleProjects = activeCategory === 'Semua'
    ? portfolioProjects
    : portfolioProjects.filter((project) => project.category === activeCategory)

  return (
    <>
      <section className="listing-header">
        <PageIntro
          eyebrow="KARYA MAHASISWA"
          title="Portofolio"
          description="Kumpulan project yang sudah dibuat oleh mahasiswa Sigma Lab."
          headingLevel={1}
        />
      </section>
      <section className="listing-section">
        <div className="filter-bar" role="group" aria-label="Filter project berdasarkan kategori">
          {categories.map((category) => (
            <button
              className={`filter-chip${activeCategory === category ? ' is-selected' : ''}`}
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <p className="results-count" aria-live="polite">
          Menampilkan {visibleProjects.length} project
        </p>
        <div className="portfolio-grid">
          {visibleProjects.map((project) => (
            <PortfolioCard key={project.title} project={project} />
          ))}
        </div>
        {visibleProjects.length === 0 && (
          <div className="empty-state">Belum ada project untuk kategori ini.</div>
        )}
      </section>
      <section className="about-cta">
        <span className="eyebrow">PROJECT BERIKUTNYA BISA JADI MILIKMU</span>
        <h2>Punya ide project berdampak?</h2>
        <p>Request projectmu sekarang dan wujudkan bersama Sigma Lab.</p>
        <a className="button button--primary" href="/projects#request">Request Project <span aria-hidden="true">↗</span></a>
      </section>
    </>
  )
}

export default Portfolio
