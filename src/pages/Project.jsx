import { useState } from 'react'
import { ActiveProjectCard } from '../components/ProjectCards.jsx'
import { PageIntro, RequestForm } from '../components/SiteLayout.jsx'
import { activeProjects, portfolioProjects } from '../data/projects.js'

const categories = ['Semua', 'Web App', 'Mobile', 'IoT', 'Data']
const featuredProject = portfolioProjects[0]

function Projects() {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const visibleProjects = activeCategory === 'Semua'
    ? activeProjects
    : activeProjects.filter((project) => project.category === activeCategory)

  return (
    <>
      <section className="project-hero">
        <div className="project-hero__copy">
          <span className="eyebrow">BELAJAR SAMBIL BERKARYA</span>
          <h1>Pilih project, bangun karya, dan berdampak nyata</h1>
          <p>
            Jelajahi project yang sedang dibuka, lihat karya terbaik mahasiswa, atau ajukan idemu
            sendiri untuk dikerjakan bersama Sigma Lab.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#request">Request Project <span aria-hidden="true">↗</span></a>
            <a className="button button--light-outline" href="#top-project">Lihat Top Project</a>
          </div>
        </div>
        <div className="project-hero__visual">
          <img
            className="project-hero__art"
            src="/assets/project-hero-project-exploration-primary.png"
            alt="Ilustrasi eksplorasi project mahasiswa"
          />
          <div className="project-stats" aria-label="Statistik Sigma Lab">
            <div className="project-stat project-stat--teal"><strong>24+</strong><span>Project selesai</span></div>
            <div className="project-stat project-stat--yellow"><strong>12</strong><span>Project dibuka</span></div>
            <div className="project-stat project-stat--cream"><strong>36</strong><span>Mahasiswa terlibat</span></div>
          </div>
        </div>
      </section>

      <section className="listing-section project-listing">
        <PageIntro
          eyebrow="TEMUKAN KOLABORASI"
          title="Project Overview"
          description="Project yang bisa kamu pilih dan ikuti. Pilih yang sesuai minat dan skill-mu."
        />
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
        <div className="active-project-grid">
          {visibleProjects.map((project) => (
            <ActiveProjectCard key={project.title} project={project} />
          ))}
        </div>
        {visibleProjects.length === 0 && (
          <div className="empty-state">Belum ada project untuk kategori ini.</div>
        )}
      </section>

      <section className="top-project-section" id="top-project">
        <PageIntro
          eyebrow="KARYA PILIHAN"
          title="Top Project"
          description="Karya terbaik yang sudah dibuat oleh mahasiswa Sigma Lab."
        />
        <article className="top-project">
          <div className="top-project__copy">
            <span className="top-project__badge">#1 TOP PROJECT</span>
            <h2>{featuredProject.title}</h2>
            <p>
              Aplikasi presensi digital berbasis web untuk mencatat kehadiran kegiatan dan training,
              lengkap dengan rekap otomatis dan ekspor laporan.
            </p>
            <span className="top-project__creator">Creator: {featuredProject.creator}</span>
            <a className="button button--primary" href="/portfolio">Lihat Project <span aria-hidden="true">↗</span></a>
          </div>
          <img
            className="top-project__art"
            src="/assets/project-top-attendance-dashboard-primary.png"
            alt="Ilustrasi dashboard aplikasi presensi SIGMA Attendance"
          />
        </article>
      </section>

      <section className="request-section" id="request">
        <div className="request-section__copy">
          <span className="eyebrow">MULAI DARI SEBUAH IDE</span>
          <h2>Punya ide project berdampak?</h2>
          <p>Request projectmu sekarang. Isi form di samping dan tim Sigma Lab akan menghubungimu.</p>
          <ul>
            <li>Ceritakan ide dan tujuan project</li>
            <li>Tentukan deadline yang kamu inginkan</li>
            <li>Kami hubungi lewat kontak yang kamu isi</li>
          </ul>
        </div>
        <img
          className="section-art section-art--request"
          src="/assets/project-ajukan-ide-team-ideation-primary.png"
          alt="Ilustrasi tim mengembangkan ide project"
        />
        <RequestForm />
      </section>
    </>
  )
}

export default Projects
