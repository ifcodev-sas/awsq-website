import Link from 'next/link';

export function Navbar() {
  return (
    <header className="awsq-navbar">
      <div className="awsq-container">
        <div className="awsq-navbar-inner">
          <Link href="/" className="awsq-brand">
            <span className="awsq-logo-badge">AWSQ</span>
            <div className="awsq-brand-text">
              <span className="awsq-brand-title">AWSQ</span>
              <span className="awsq-brand-sub">Advanced Web Software &amp; Quality</span>
            </div>
          </Link>

          <nav>
            <ul className="awsq-nav-links">
              <li><Link href="/#servicios" className="awsq-nav-link">Servicios</Link></li>
              <li><Link href="/#metodologia" className="awsq-nav-link">Calidad &amp; QA</Link></li>
              <li><Link href="/#planes" className="awsq-nav-link">Planes</Link></li>
              <li><Link href="/#nosotros" className="awsq-nav-link">Nosotros</Link></li>
              <li><Link href="/terms" className="awsq-nav-link">Términos</Link></li>
              <li><Link href="/refunds" className="awsq-nav-link">Reembolsos</Link></li>
              <li><Link href="/contact" className="awsq-nav-link">Contacto</Link></li>
            </ul>
          </nav>

          <div className="awsq-nav-actions">
            <Link href="/contact" className="awsq-btn awsq-btn-outline">
              Soporte
            </Link>
            <a
              href="https://awsq.console.quest.side.awsq-2.nodhus.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="awsq-btn awsq-btn-primary"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
              Consola AWSQ
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
