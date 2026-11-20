export function ProjectArtwork({ accent = 'teal' }) {
  return (
    <div className={`project-art project-art--${accent}`} aria-hidden="true">
      <div className="project-art__window">
        <div className="project-art__topbar"><i /><i /><i /></div>
        <div className="project-art__layout">
          <div className="project-art__nav"><i /><i /><i /><i /></div>
          <div className="project-art__screen">
            <div className="project-art__heading" />
            <div className="project-art__stat-row"><i /><i /></div>
            <div className="project-art__chart"><i /><i /><i /><i /><i /></div>
            <div className="project-art__copy"><i /><i /><i /></div>
          </div>
        </div>
      </div>
      <span className="project-art__spark" />
    </div>
  )
}

export function PortfolioCard({ project }) {
  return (
    <article className="portfolio-card">
      <ProjectArtwork accent={project.accent} />
      <div className="portfolio-card__content">
        <div className="portfolio-card__meta">
          <span>{project.category}</span>
          <span>{project.creator}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a className="text-link" href="/projects">
          {project.link} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}

export function ActiveProjectCard({ project }) {
  return (
    <article className="active-project-card">
      <div className="active-project-card__meta">
        <span className={`status-pill${project.status === 'Berjalan' ? ' status-pill--running' : ''}`}>
          {project.status}
        </span>
        <span>{project.category}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="active-project-card__details">
        <span>Deadline: {project.deadline}</span>
        <span>{project.members} anggota</span>
      </div>
      <a className="text-link" href="#request">Lihat detail <span aria-hidden="true">→</span></a>
    </article>
  )
}
