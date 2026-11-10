import Link from 'next/link';

export function Footer() {
  return (
    <footer className="awsq-footer">
      <div className="awsq-container">
        <div className="awsq-footer-grid">
          <div className="awsq-footer-col">
            <div className="awsq-brand" style={{ marginBottom: '16px' }}>
              <span className="awsq-logo-badge">AWSQ</span>
              <div className="awsq-brand-text">
                <span className="awsq-brand-title">AWSQ</span>
                <span className="awsq-brand-sub">Advanced Web Software &amp; Quality</span>
              </div>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--awsq-text-secondary)', maxWidth: '340px', margin: '0 0 16px' }}>
              Firma de ingeniería cloud en AWS, desarrollo de plataformas web de alta disponibilidad y aseguramiento de calidad (QA).
            </p>
            <div style={{ fontSize: '12px', color: 'var(--awsq-text-muted)', lineHeight: '1.7' }}>
              <div><strong>Representante:</strong> Juan García</div>
              <div><strong>Email Oficial dLocal Go:</strong> <a href="mailto:awssidethequest@gmail.com" style={{ color: 'var(--awsq-orange-light)', textDecoration: 'none' }}>awssidethequest@gmail.com</a></div>
              <div><strong>Dominio Corporativo:</strong> awsqconsole.info</div>
              <div><strong>Ubicación:</strong> Cartagena, Colombia · Cobertura Internacional</div>
            </div>
          </div>

          <div className="awsq-footer-col">
            <h4>Servicios &amp; Soluciones</h4>
            <ul className="awsq-footer-links">
              <li><Link href="/#servicios" className="awsq-footer-link">Arquitectura AWS Cloud</Link></li>
              <li><Link href="/#servicios" className="awsq-footer-link">Desarrollo Web Full-Stack</Link></li>
              <li><Link href="/#metodologia" className="awsq-footer-link">Software Quality Assurance (QA)</Link></li>
              <li><Link href="/#servicios" className="awsq-footer-link">DevOps &amp; CI/CD Pipelines</Link></li>
              <li><Link href="/#servicios" className="awsq-footer-link">FinOps &amp; Facturación Cloud</Link></li>
            </ul>
          </div>

          <div className="awsq-footer-col">
            <h4>Políticas y Legal</h4>
            <ul className="awsq-footer-links">
              <li><Link href="/terms" className="awsq-footer-link">Términos y Condiciones</Link></li>
              <li><Link href="/privacy" className="awsq-footer-link">Política de Privacidad</Link></li>
              <li><Link href="/refunds" className="awsq-footer-link">Política de Reembolso y Devolución</Link></li>
              <li><Link href="/delivery" className="awsq-footer-link">Prestación de Servicios y SLA</Link></li>
              <li><Link href="/contact" className="awsq-footer-link">Canal de Contacto y PQRS</Link></li>
            </ul>
          </div>

          <div className="awsq-footer-col">
            <h4>Acceso a Clientes</h4>
            <ul className="awsq-footer-links">
              <li><a href="https://awsq.console.quest.side.awsq-2.nodhus.com/login" target="_blank" rel="noopener noreferrer" className="awsq-footer-link">Consola de Facturación AWS</a></li>
              <li><a href="https://awsq.console.quest.side.awsq-2.nodhus.com/login" target="_blank" rel="noopener noreferrer" className="awsq-footer-link">Detalle de Consumos y Reportes</a></li>
              <li><a href="https://awsq.console.quest.side.awsq-2.nodhus.com/login" target="_blank" rel="noopener noreferrer" className="awsq-footer-link">Gestión de Pagos e Invoices</a></li>
              <li><Link href="/contact" className="awsq-footer-link">Soporte Técnico 24/7</Link></li>
            </ul>
          </div>
        </div>

        <div className="awsq-footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} AWSQ - Advanced Web Software &amp; Quality. Todos los derechos reservados.
          </div>
          <div>
            Sitio validado para procesamiento seguro de pagos internacionales con dLocal Go, PayPal y Stripe.
          </div>
        </div>
      </div>
    </footer>
  );
}
