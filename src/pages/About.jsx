import { DashboardArt } from '../components/SiteLayout.jsx'

const principles = [
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

function About() {
  return (
    <>
      <section className="about-hero">
        <div className="about-hero__copy">
          <span className="eyebrow eyebrow--teal">TENTANG KAMI</span>
          <h1>Apa itu Sigma Lab?</h1>
          <p>
            Sigma Lab adalah wadah bagi mahasiswa untuk belajar dan berkarya di bidang teknologi.
            Kami menggabungkan training dan pembuatan produk nyata, sehingga setiap anggota belajar
            langsung dari project yang benar-benar dipakai.
          </p>
          <a className="button button--outline" href="/portfolio">Lihat Portofolio <span aria-hidden="true">↗</span></a>
        </div>
        <DashboardArt compact />
      </section>

      <section className="dark-section">
        <div className="section-heading section-heading--center">
          <span className="eyebrow">BELAJAR DENGAN MEMBUAT</span>
          <h2>What we do</h2>
          <p>Training dan pembuatan produk nyata untuk mahasiswa</p>
        </div>
        <div className="program-grid">
          {principles.map((item) => (
            <article className={`program-card program-card--${item.tone}`} key={item.number}>
              <span className="program-card__number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-story">
        <div>
          <span className="eyebrow eyebrow--teal">CARA KAMI BERTUMBUH</span>
          <h2>Belajar yang terasa nyata.</h2>
        </div>
        <div className="about-story__copy">
          <p>
            Di Sigma Lab, proses belajar tidak berhenti di teori. Mahasiswa berkolaborasi dalam tim,
            mengubah kebutuhan nyata menjadi produk digital, lalu belajar dari setiap tahap
            pengerjaannya.
          </p>
          <p>
            Dari antarmuka hingga database, setiap project menjadi ruang untuk mencoba hal baru,
            saling berbagi, dan membangun karya yang bermanfaat.
          </p>
          <a className="text-link" href="/projects">Jelajahi project <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="about-cta">
        <span className="eyebrow">PUNYA IDE YANG INGIN DIWUJUDKAN?</span>
        <h2>Mari buat sesuatu yang berdampak.</h2>
        <p>Request projectmu sekarang dan wujudkan bersama Sigma Lab.</p>
        <a className="button button--primary" href="/projects#request">Request Project <span aria-hidden="true">↗</span></a>
      </section>
    </>
  )
}

export default About
