import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url('/vemag.jpeg')` }}>
        <div className="hero-overlay"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-content">
            <div className="hero-brand-card">
              <div className="hero-logo-mark">⚙️</div>
              <div>
                <span className="badge">Oficina Especializada</span>
                <strong className="hero-brand-name">DELSON VEMAG</strong>
              </div>
            </div>
            <h1>DKW-Vemag & Clássicos</h1>
            <p>Mantendo viva a lenda dos motores dois tempos. Restauração rigorosa, mecânica especializada e a perícia de quem ama o que faz.</p>
            <div className="hero-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <Link to="/contact" className="btn btn-primary">Agendar Serviço</Link>
              <Link to="/vemag" className="btn btn-secondary">Sobre o Vemaguet</Link>
              <a
                href="https://www.google.com/maps/place/Centro+Automotivo+Sabonete/@-15.8705261,-47.963704,323m/data=!3m1!1e3!4m14!1m7!3m6!1s0x935a2e54c21370a9:0xff7f20d18f7711f9!2sCentro+Automotivo+Sabonete!8m2!3d-15.8706867!4d-47.9626548!16s%2Fg%2F1pty41dpy!3m5!1s0x935a2e54c21370a9:0xff7f20d18f7711f9!8m2!3d-15.8706867!4d-47.9626548!16s%2Fg%2F1pty41dpy?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                Localização
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vemag Highlight Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="photo-showcase-card">
            <div className="photo-showcase-copy">
              <span className="badge">Vemag em destaque</span>
              <h2>Uma imagem que conta a história do nosso trabalho</h2>
              <p>Agora a foto do Vemag aparece em um bloco próprio na página inicial, com um movimento sutil para dar mais vida ao layout.</p>
            </div>
            <div className="photo-frame">
              <img src="/vemag.jpeg" alt="Vemag em destaque" className="photo-animate" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="page-intro" style={{ marginBottom: '50px', textAlign: 'left', marginLeft: 0 }}>
            <span className="badge">Nossos Serviços</span>
            <h2>Especialidades Mecânicas</h2>
            <p style={{ marginTop: '12px' }}>Oferecemos cuidados autênticos para manter o desempenho e a originalidade do seu clássico.</p>
          </div>

          <div className="grid-3">
            <div className="card">
              <span className="card-icon">⚙️</span>
              <h3>Motores 2 Tempos</h3>
              <p>Revisão completa, retífica e regulagem fina do clássico motor de 3 cilindros DKW. Performance e fumaça na medida certa.</p>
            </div>
            <div className="card">
              <span className="card-icon">🔧</span>
              <h3>Restauração de Componentes</h3>
              <p>Restauração artesanal de freios, caixas de câmbio, carburadores e suspensão seguindo os padrões originais de fábrica.</p>
            </div>
            <div className="card">
              <span className="card-icon">⚡</span>
              <h3>Elétrica & Ignição</h3>
              <p>Ajuste no sistema de platinados, bobinas e fiação elétrica para garantir partidas confiáveis e funcionamento suave.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div>
              <div className="stat-number">40+</div>
              <div className="stat-label">Anos de Experiência</div>
            </div>
            <div>
              <div className="stat-number">150+</div>
              <div className="stat-label">Carros Restaurados</div>
            </div>
            <div>
              <div className="stat-number">100%</div>
              <div className="stat-label">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home