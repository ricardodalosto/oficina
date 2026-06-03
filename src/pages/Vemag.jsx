const Vemag = () => {
  return (
    <div className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Intro Header */}
        <div className="page-intro">
          <span className="badge">História Automobilística</span>
          <h1>DKW-Vemag Vemaguet</h1>
          <p>O primeiro automóvel de passeio produzido em escala no Brasil, famoso por sua valentia e o som marcante de seu motor de dois tempos.</p>
        </div>

        {/* Story content */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center', marginTop: '60px' }}>
          <div>
            <h2 style={{ marginBottom: '20px' }}>Um Ícone das Estradas Brasileiras</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '16px', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Produzida sob licença da Auto Union/DKW alemã pela Vemag (Veículos e Máquinas Agrícolas) entre 1958 e 1967, a Vemaguet foi a perua que conquistou as famílias brasileiras. 
              Sua mecânica robusta era perfeita para as precárias estradas da época.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '16px', fontSize: '1.05rem', lineHeight: '1.7' }}>
              O grande diferencial tecnológico era o motor de dois tempos: apenas sete peças móveis (três pistões, três bielas e um virabrequim), sem válvulas, comandos ou bomba de óleo. 
              A lubrificação ocorria misturando óleo diretamente à gasolina no tanque — gerando a famosa fumaça azulada.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '16px', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Além disso, a Vemaguet contava com tração dianteira (incomum na época) e o exclusivo sistema de <strong>Roda-Livre</strong>, que desacoplava a transmissão quando o motorista tirava o pé do acelerador, economizando combustível e poupando o motor.
            </p>
            <p style={{ marginTop: '24px' }}>
              Saiba mais na{' '}
              <a
                href="https://pt.wikipedia.org/wiki/DKW-Vemag_Vemaguet"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: '600' }}
              >
                Wikipédia Oficial →
              </a>
            </p>
          </div>

          <div>
            <h2 style={{ marginBottom: '20px' }}>Ficha Técnica Genuína</h2>
            <table className="tech-table">
              <thead>
                <tr>
                  <th>Especificação</th>
                  <th>Dados de Época</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Tipo de Motor</strong></td>
                  <td>3 cilindros em linha, 2 tempos</td>
                </tr>
                <tr>
                  <td><strong>Cilindrada</strong></td>
                  <td>981 cm³ (1.0 Litro)</td>
                </tr>
                <tr>
                  <td><strong>Potência Máxima</strong></td>
                  <td>50 cv a 4.500 rpm</td>
                </tr>
                <tr>
                  <td><strong>Torque Máximo</strong></td>
                  <td>8.0 kgfm a 2.250 rpm</td>
                </tr>
                <tr>
                  <td><strong>Alimentação</strong></td>
                  <td>Carburador simples Brosol/Solex</td>
                </tr>
                <tr>
                  <td><strong>Câmbio</strong></td>
                  <td>4 marchas sincronizadas com roda-livre</td>
                </tr>
                <tr>
                  <td><strong>Tração</strong></td>
                  <td>Dianteira</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vemag