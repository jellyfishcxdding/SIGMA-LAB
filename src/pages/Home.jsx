import { PortfolioCard } from '../components/ProjectCards.jsx'
import { DashboardArt, RequestForm } from '../components/SiteLayout.jsx'
import { portfolioProjects } from '../data/projects.js'

const programs = [
  {
    number: '01',
    title: 'Training',
    description: 'Kelas dan mentoring terstruktur untuk menguasai dasar hingga pengembangan web full-stack.',
    tone: 'teal',
  },
  {
    number: '02',
    title: 'Product Creation',
    description: 'Membangun aplikasi dan produk digital nyata, dari ide dan desain sampai siap dipakai.',
    tone: 'yellow',
  },
  {
    number: '03',
    title: 'Request Project',
    description: 'Punya ide? Ajukan project dan tim kami bantu mewujudkannya bersama.',
    tone: 'cream',
  },
]

const learningTracks = [
  {
    label: 'FRONTEND',
    title: 'React',
    description: 'Membangun antarmuka web yang interaktif dengan komponen yang bisa dipakai ulang.',
    tone: 'teal',
  },
  {
    label: 'BACKEND',
    title: 'Express',
    description: 'Membuat REST API dan logika server menggunakan Node.js dan Express.',
    tone: 'yellow',
  },
  {
    label: 'DATABASE',
    title: 'MySQL',
    description: 'Merancang dan mengelola database relasional untuk menyimpan data project.',
    tone: 'cream',
  },
]

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__copy">
          <span className="eyebrow eyebrow--teal">SIGMA LAB</span>
          <h1>Wujudkan ide menjadi produk digital nyata</h1>
          <p>
            Sigma Lab adalah wadah mahasiswa untuk belajar, berkarya, dan membangun produk nyata
            dengan React, Express, dan MySQL.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="/portfolio">Lihat Portofolio <span aria-hidden="true">↗</span></a>
            <a className="button button--outline" href="/projects#request">Request Project</a>
          </div>
          <div className="hero__account-links">
            <span>Belum punya akun? <a href="/projects#request">Daftar</a></span>
            <i />
            <span>Sudah punya akun? <a href="/projects#request">Login</a></span>
          </div>
        </div>
        <DashboardArt />
      </section>

      <section className="about-strip">
        <h2>Apa itu Sigma Lab?</h2>
        <div>
          <p>
            Sigma Lab adalah wadah bagi mahasiswa untuk belajar dan berkarya di bidang teknologi.
            Kami menggabungkan training dan pembuatan produk nyata, sehingga setiap anggota belajar
            langsung dari project yang benar-benar dipakai.
          </p>
          <a className="button button--outline" href="/about">Selengkapnya tentang kami</a>
        </div>
      </section>

      <section className="dark-section">
        <div className="section-heading section-heading--center">
          <span className="eyebrow">BELAJAR DENGAN MEMBUAT</span>
          <h2>What we do</h2>
          <p>Training dan pembuatan produk nyata untuk mahasiswa</p>
        </div>
        <div className="program-grid">
          {programs.map((program) => (
            <article className={`program-card program-card--${program.tone}`} key={program.number}>
              <span className="program-card__number">{program.number}</span>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dark-section dark-section--continuation">
        <div className="section-heading section-heading--center">
          <span className="eyebrow">DARI DASAR HINGGA PRODUK</span>
          <h2>What we learn</h2>
          <p className="learning-flow">React <span>→</span> Express <span>→</span> MySQL</p>
        </div>
        <div className="program-grid">
          {learningTracks.map((track) => (
            <article className={`program-card program-card--${track.tone}`} key={track.title}>
              <span className="eyebrow">{track.label}</span>
              <h3>{track.title}</h3>
              <p>{track.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="featured-section">
        <div className="section-heading">
          <span className="eyebrow eyebrow--teal">DIBUAT BERSAMA</span>
          <h2>Karya Terbaru</h2>
          <p>Beberapa produk nyata yang lahir dari proses belajar di Sigma Lab.</p>
        </div>
        <div className="portfolio-grid portfolio-grid--three">
          {portfolioProjects.slice(0, 3).map((project) => (
            <PortfolioCard key={project.title} project={project} />
          ))}
        </div>
        <a className="button button--outline featured-section__more" href="/portfolio">
          Lihat semua portofolio <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="request-section" id="request">
        <div className="request-section__copy">
          <span className="eyebrow">MULAI DARI SEBUAH IDE</span>
          <h2>Punya ide project berdampak?</h2>
          <p>Request projectmu sekarang. Isi form dan tim Sigma Lab akan menghubungimu.</p>
          <ul>
            <li>Ceritakan ide dan tujuan project</li>
            <li>Tentukan deadline yang kamu inginkan</li>
            <li>Kami hubungi lewat kontak yang kamu isi</li>
          </ul>
        </div>
        <RequestForm />
      </section>
    </>
  )
}

export default Home
