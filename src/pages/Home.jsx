const pillars = [
  {
    number: '01',
    label: 'JELAJAHI',
    title: 'Temukan ruangmu',
    description: 'Mulai dari hal yang kamu suka. Kenali project, peran, dan tantangan yang ingin kamu coba.',
  },
  {
    number: '02',
    label: 'KOLABORASI',
    title: 'Tumbuh bersama',
    description: 'Bertemu teman satu visi, bertukar ide, dan belajar menyelesaikan masalah sebagai tim.',
  },
  {
    number: '03',
    label: 'WUJUDKAN',
    title: 'Buat sesuatu yang nyata',
    description: 'Ubah proses belajar menjadi karya digital yang bisa kamu tunjukkan dan kembangkan.',
  },
]

const journey = [
  {
    number: '01 / TEMUKAN',
    title: 'Mulai dengan rasa ingin tahu',
    description: 'Kenali program dan project yang paling dekat dengan minatmu.',
  },
  {
    number: '02 / TERLIBAT',
    title: 'Ambil peran di dalam tim',
    description: 'Bawa kemampuanmu, belajar dari anggota lain, dan bangun solusi bareng-bareng.',
  },
  {
    number: '03 / TUMBUH',
    title: 'Bagikan hasil karyamu',
    description: 'Rayakan prosesnya, tunjukkan hasilnya, dan bawa pengalaman itu ke langkah berikutnya.',
  },
]

function Home() {
  return (
    <>
      <section className="landing-hero" id="top">
        <div className="landing-hero__copy">
          <div className="landing-kicker">
            <span className="landing-kicker__dot" aria-hidden="true" />
            RUANG TUMBUH UNTUK MAHASISWA
          </div>
          <h1>
            Ide hebat
            <br />
            <span>layak diwujudkan.</span>
          </h1>
          <p className="landing-hero__description">
            Temukan project, teman satu visi, dan kesempatan untuk belajar dengan cara yang paling
            nyata: membangun sesuatu bersama.
          </p>
          <div className="landing-hero__actions">
            <a className="landing-button landing-button--primary" href="/projects">
              Jelajahi project <span aria-hidden="true">↗</span>
            </a>
            <a className="landing-button landing-button--text" href="/register">
              Mulai bersama Sigma Lab <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="landing-hero__footnote">
            <span aria-hidden="true">✳</span>
            Belajar lewat proses. Bertumbuh lewat kolaborasi.
          </div>
        </div>
        <div className="landing-hero__visual">
          <img
            src="/assets/home-workspace-collaboration.svg"
            alt="Pratinjau ruang project Sigma Lab dengan papan kerja tim dan progress kolaborasi"
            width="880"
            height="700"
          />
          <div className="landing-hero__visual-note">
            <span className="landing-hero__visual-icon" aria-hidden="true">↗</span>
            <span><b>Ide jadi aksi.</b><br />Satu langkah bersama tim.</span>
          </div>
        </div>
      </section>

      <section className="landing-platform" id="platform">
        <div className="landing-platform__heading">
          <div>
            <span className="landing-eyebrow">LEARN BY BUILDING</span>
            <h2>Ruang yang tepat bisa mengubah cara kamu bertumbuh.</h2>
          </div>
          <p>
            Sigma Lab mempertemukan rasa ingin tahu dengan kesempatan untuk mencoba, berkontribusi,
            dan membuat karya yang berarti.
          </p>
        </div>
        <div className="landing-pillar-grid">
          {pillars.map((pillar) => (
            <article className="landing-pillar" key={pillar.number}>
              <div className="landing-pillar__top">
                <span>{pillar.number}</span>
                <span>{pillar.label}</span>
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
              <span className="landing-pillar__arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-journey" id="alur">
        <div className="landing-journey__intro">
          <span className="landing-eyebrow landing-eyebrow--light">CARA KERJA</span>
          <h2>Dari penasaran, jadi punya karya.</h2>
          <p>
            Tidak harus tahu semuanya dari awal. Yang penting, mulai melangkah dan terus belajar
            bersama orang-orang di sekitarmu.
          </p>
          <a className="landing-journey__link" href="/about">
            Kenali Sigma Lab <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="landing-journey__steps">
          {journey.map((step) => (
            <article className="landing-journey__step" key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-cta">
        <div>
          <span className="landing-eyebrow landing-eyebrow--light">LANGKAH PERTAMAMU DIMULAI DI SINI</span>
          <h2>Ada ide? Mari wujudkan bersama.</h2>
          <p>Jelajahi project yang ada atau bergabung untuk memulai perjalananmu di Sigma Lab.</p>
        </div>
        <div className="landing-cta__actions">
          <a className="landing-button landing-button--yellow" href="/register">
            Gabung Sigma Lab <span aria-hidden="true">↗</span>
          </a>
          <a className="landing-cta__secondary" href="/login">Sudah punya akun? Masuk</a>
        </div>
      </section>
    </>
  )
}

export default Home
