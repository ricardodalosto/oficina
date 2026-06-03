const About = () => {
  return (
    <div className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Intro */}
        <div className="page-intro">
          <span className="badge">Nossa História</span>
          <h1>Quem é o Mecânico Deslon?</h1>
          <p>Uma vida inteira dedicada à preservação da história automobilística brasileira e dos motores dois tempos.</p>
        </div>

        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
          <img
            src="/vemag.jpeg"
            alt="Vemag em destaque"
            style={{ width: '100%', maxWidth: '760px', borderRadius: '18px', border: '1px solid var(--border-color)', objectFit: 'cover' }}
          />
        </div>

        {/* Narrative columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start', marginTop: '60px' }}>
          <div>
            <h2 style={{ marginBottom: '20px' }}>Paixão de Gerações</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '16px', fontSize: '1.05rem' }}>
              A Oficina Deslon Vemag começou com um simples fascínio pelo som peculiar e a mecânica simples, mas engenhosa, dos motores DKW de dois tempos. 
              Ao longo de décadas, o mecânico Deslon transformou esse hobby em sua principal especialidade profissional.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '16px', fontSize: '1.05rem' }}>
              Hoje, somos procurados por colecionadores de todo o país que buscam não apenas uma manutenção corretiva, mas sim uma verdadeira curadoria de seus veículos históricos. 
              Entendemos que cada Vemaguet, Belcar ou Candango traz consigo memórias de famílias brasileiras e uma era dourada da nossa indústria.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="card">
              <h3>Originalidade Acima de Tudo</h3>
              <p>Seguimos rigorosamente os manuais originais de fábrica. Nosso objetivo é manter o veículo o mais próximo possível de como ele saiu da concessionária há 60 anos.</p>
            </div>
            <div className="card">
              <h3>Artesanato Mecânico</h3>
              <p>Trabalhamos com calma e precisão. Ajustar carburadores e sistemas de platinados DKW requer paciência e ouvidos treinados — algo que a tecnologia moderna não substitui.</p>
            </div>
          </div>
        </div>

        {/* Values section */}
        <div style={{ marginTop: '80px', borderTop: '1px solid var(--border-color)', paddingTop: '60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="badge">Compromissos</span>
            <h2>Nossos Pilares</h2>
          </div>
          <div className="grid-3">
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '16px' }}>🏆</span>
              <h3 style={{ marginBottom: '12px' }}>Qualidade Genuína</h3>
              <p style={{ color: 'var(--text-muted)' }}>Utilizamos e restauramos peças de estoque antigo ou reproduções de altíssima qualidade que respeitam as especificações originais.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '16px' }}>🤝</span>
              <h3 style={{ marginBottom: '12px' }}>Transparência</h3>
              <p style={{ color: 'var(--text-muted)' }}>O proprietário acompanha todo o processo de desmontagem e montagem do veículo, com relatórios detalhados e documentação fotográfica.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '16px' }}>❤️</span>
              <h3 style={{ marginBottom: '12px' }}>Amor ao Antigomobilismo</h3>
              <p style={{ color: 'var(--text-muted)' }}>Para nós, não são apenas carros. São monumentos da engenharia nacional que contam histórias que merecem continuar rodando pelas estradas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About