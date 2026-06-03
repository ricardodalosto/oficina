import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div>
          <h3>Oficina Deslon Vemag</h3>
          <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.5' }}>
            Especialista na restauração, manutenção e preservação dos clássicos motores DKW de dois tempos.
          </p>
        </div>
        <div>
          <h3>Navegação</h3>
          <ul className="footer-links">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/about">Sobre Nós</Link></li>
            <li><Link to="/vemag">Vemaguet</Link></li>
            <li><Link to="/contact">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h3>Contato & Redes</h3>
          <p style={{ fontSize: '0.95rem', color: '#94a3b8', marginBottom: '12px' }}>
            Telefone: <a href="tel:+5561999999999">(61) 3552-4231</a>
            <br />
            Celular: <a href="tel:+5561999999999">(61) 9901-8287</a>
          </p>
          <div className="social-icons">
            <a href="https://wa.me/556199018287" target="_blank" rel="noopener noreferrer" title="WhatsApp">WA</a>
            <a href="https://instagram.com/vemagcenter" target="_blank" rel="noopener noreferrer" title="Instagram">IG</a>
            <a href="https://facebook.com/vemagcenter" target="_blank" rel="noopener noreferrer" title="Facebook">FB</a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© 2026 Oficina Deslon Vemag. Todos os direitos reservados. Mantendo viva a tradição DKW.</p>
        <p style={{ marginTop: '6px', fontSize: '0.9rem', color: '#cbd5e1' }}>Desenvolvido por Ricardo Dalosto</p>
      </div>
    </footer>
  )
}

export default Footer