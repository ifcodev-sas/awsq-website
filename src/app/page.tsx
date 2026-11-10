import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div>
      <Navbar />

      {/* Hero Principal */}
      <section className="awsq-hero">
        <div className="awsq-container">
          <div className="awsq-badge-pill">
            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#ff9900', boxShadow: '0 0 8px #ff9900' }} />
            AWS Cloud Architecture · High-Performance Web · Software QA
          </div>

          <h1 className="awsq-hero-title">
            Advanced Web Software &amp; Quality
          </h1>

          <p className="awsq-hero-lead">
            Diseñamos arquitecturas en la nube sobre Amazon Web Services, construimos plataformas web de alto rendimiento y garantizamos la máxima calidad de software mediante metodologías avanzadas de QA y observabilidad continua.
          </p>

          <div className="awsq-hero-ctas">
            <a
              href="https://awsq.console.quest.side.awsq-2.nodhus.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="awsq-btn awsq-btn-primary"
              style={{ padding: '14px 28px', fontSize: '15px' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
              Acceder a Consola AWSQ
            </a>
            <Link href="#servicios" className="awsq-btn awsq-btn-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Explorar Soluciones
            </Link>
          </div>

          {/* Estadísticas de Confianza */}
          <div className="awsq-stats-ribbon">
            <div className="awsq-stat-item">
              <div className="awsq-stat-num">99.99%</div>
              <div className="awsq-stat-label">Disponibilidad Cloud SLA</div>
            </div>
            <div className="awsq-stat-item">
              <div className="awsq-stat-num">+40</div>
              <div className="awsq-stat-label">Proyectos y Ambientes en Nube</div>
            </div>
            <div className="awsq-stat-item">
              <div className="awsq-stat-num">100%</div>
              <div className="awsq-stat-label">AWS Well-Architected Framework</div>
            </div>
            <div className="awsq-stat-item">
              <div className="awsq-stat-num">24/7</div>
              <div className="awsq-stat-label">Telemetría y Facturación Transparente</div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Principales (4 Pilares) */}
      <section id="servicios" className="awsq-container" style={{ paddingBottom: '30px' }}>
        <div className="awsq-section-header">
          <div className="awsq-section-tag">Capacidades Técnicas</div>
          <h2 className="awsq-section-title">Servicios de Ingeniería de Alta Calidad</h2>
          <p className="awsq-section-desc">
            Brindamos soluciones integrales de tecnología orientadas a maximizar la resiliencia operativa, reducir costes en la nube y asegurar lanzamientos sin errores.
          </p>
        </div>

        <div className="awsq-services-grid">
          {/* Pilar 1 */}
          <div className="awsq-service-card">
            <div className="awsq-card-icon">☁️</div>
            <h3>Arquitectura AWS Cloud &amp; DevOps</h3>
            <p>
              Diseñamos, aprovisionamos y securizamos infraestructuras en Amazon Web Services siguiendo las mejores prácticas de la industria con Infraestructura como Código (IaC).
            </p>
            <ul className="awsq-feature-list">
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Cómputo escalable: EC2, ECS, EKS y Lambda Serverless</li>
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Almacenamiento distribuido y seguro: Amazon S3 &amp; EBS</li>
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Bases de datos administradas: RDS PostgreSQL / MySQL Multi-AZ</li>
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Redes privadas VPC, WAF, Route 53 y CloudFront CDN</li>
            </ul>
          </div>

          {/* Pilar 2 */}
          <div className="awsq-service-card">
            <div className="awsq-card-icon">💻</div>
            <h3>Desarrollo Web &amp; Software Full-Stack</h3>
            <p>
              Construcción de aplicaciones web modernas, rápidas y seguras con tecnologías líderes en el mercado, orientadas al rendimiento y conversión de negocios.
            </p>
            <ul className="awsq-feature-list">
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Frontend reactivo con Next.js, React y TypeScript</li>
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> APIs RESTful &amp; GraphQL de alta concurrencia en Node.js/Python</li>
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Integración de pasarelas internacionales (dLocal Go, PayPal, Stripe)</li>
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Arquitectura orientada a eventos y microservicios</li>
            </ul>
          </div>

          {/* Pilar 3 */}
          <div id="metodologia" className="awsq-service-card">
            <div className="awsq-card-icon">🎯</div>
            <h3>Quality Assurance (QA) &amp; Automatización</h3>
            <p>
              La calidad es nuestro pilar fundamental. Implementamos estrategias rigurosas de pruebas de software manuales y automatizadas para garantizar cero regresiones.
            </p>
            <ul className="awsq-feature-list">
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Pruebas automatizadas End-to-End con Playwright y Cypress</li>
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Pruebas de estrés y rendimiento de sistemas bajo alta carga</li>
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Análisis estático de código, seguridad SAST y cobertura</li>
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Integración en pipelines CI/CD de entrega continua</li>
            </ul>
          </div>

          {/* Pilar 4 */}
          <div className="awsq-service-card">
            <div className="awsq-card-icon">📊</div>
            <h3>FinOps &amp; Gestión de Facturación Cloud</h3>
            <p>
              Monitoreo y optimización activa de costes en la nube. Proporcionamos a nuestros clientes una consola interactiva para auditar consumos y efectuar pagos.
            </p>
            <ul className="awsq-feature-list">
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Cost Explorer interactivo con desglose de servicios mensual</li>
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Identificación de recursos ociosos y reducción de desperdicio</li>
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Facturas oficiales en PDF con formato estándar AWS</li>
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Métricas en tiempo real de consumo acumulado (MTD)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Planes y Paquetes de Servicio (id="planes") */}
      <section id="planes" className="awsq-container" style={{ paddingBottom: '30px' }}>
        <div className="awsq-section-header">
          <div className="awsq-section-tag">Precios Transparentes</div>
          <h2 className="awsq-section-title">Planes y Servicios de Consultoría</h2>
          <p className="awsq-section-desc">
            Modelos de contratación claros en dólares (USD) para empresas en crecimiento y corporativos con requerimientos críticos.
          </p>
        </div>

        <div className="awsq-pricing-grid">
          {/* Plan 1 */}
          <div className="awsq-pricing-card">
            <div className="awsq-plan-name">Cloud Assessment &amp; QA</div>
            <div className="awsq-plan-desc">Auditoría técnica inicial de infraestructura AWS y calidad de código.</div>
            <div className="awsq-plan-price">
              $299 <span className="awsq-plan-currency">USD / proyecto</span>
            </div>
            <ul className="awsq-plan-features">
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Diagnóstico de arquitectura y seguridad en AWS</li>
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Detección de sobrecostes y recomendaciones FinOps</li>
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Informe ejecutivo y técnico de vulnerabilidades</li>
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Tiempo de entrega: 5 días hábiles</li>
            </ul>
            <Link href="/contact" className="awsq-btn awsq-btn-outline" style={{ width: '100%', boxSizing: 'border-box' }}>
              Solicitar Auditoría
            </Link>
          </div>

          {/* Plan 2 (Popular) */}
          <div className="awsq-pricing-card popular">
            <div className="awsq-popular-badge">Más Recomendado</div>
            <div className="awsq-plan-name">DevOps &amp; QA Retainer</div>
            <div className="awsq-plan-desc">Gestión continua de infraestructura en la nube, calidad y soporte técnico mensual.</div>
            <div className="awsq-plan-price">
              $699 <span className="awsq-plan-currency">USD / mes</span>
            </div>
            <ul className="awsq-plan-features">
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Aprovisionamiento y administración de recursos AWS</li>
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Pipelines CI/CD y automatización de despliegues</li>
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Pruebas continuas de regresión y cobertura QA</li>
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Monitoreo 24/7 y telemetría de fallas en vivo</li>
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Consola de clientes con facturación desglosada</li>
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Soporte técnico con SLA garantizado</li>
            </ul>
            <Link href="/contact" className="awsq-btn awsq-btn-primary" style={{ width: '100%', boxSizing: 'border-box' }}>
              Contratar Plan Retainer
            </Link>
          </div>

          {/* Plan 3 */}
          <div className="awsq-pricing-card">
            <div className="awsq-plan-name">Enterprise Custom Cloud</div>
            <div className="awsq-plan-desc">Desarrollo a medida, arquitectura de nube a gran escala y soporte prioritario.</div>
            <div className="awsq-plan-price">
              $1,499 <span className="awsq-plan-currency">USD / mes</span>
            </div>
            <ul className="awsq-plan-features">
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Todo lo incluido en el Plan Retainer</li>
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Equipo de desarrollo full-stack dedicado</li>
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Arquitectura Multi-AZ y alta redundancia</li>
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> Pruebas de estrés y pruebas de penetración periódicas</li>
              <li className="awsq-feature-item"><span className="awsq-check">✓</span> SLA de respuesta crítica menor a 2 horas</li>
            </ul>
            <Link href="/contact" className="awsq-btn awsq-btn-outline" style={{ width: '100%', boxSizing: 'border-box' }}>
              Contactar Asesor Enterprise
            </Link>
          </div>
        </div>
      </section>

      {/* Banner de Identidad Corporativa y Verificación (Requerido por dLocal Go) */}
      <section id="nosotros" className="awsq-container">
        <div className="awsq-trust-banner">
          <div>
            <div className="awsq-badge-pill" style={{ marginBottom: '14px' }}>Verificación Comercial &amp; Cumplimiento</div>
            <h2 className="awsq-trust-title">Identidad Corporativa y Seguridad</h2>
            <p className="awsq-trust-desc">
              <strong>AWSQ (Advanced Web Software &amp; Quality)</strong> opera bajo estrictos estándares internacionales de transparencia comercial y seguridad de la información. Nuestra plataforma está certificada para el procesamiento de pagos transfronterizos con pasarelas reguladas.
            </p>
            <div className="awsq-trust-meta">
              <div className="awsq-meta-item">
                <div className="awsq-meta-label">Razón Comercial</div>
                <div className="awsq-meta-val">AWSQ - Advanced Web Software &amp; Quality</div>
              </div>
              <div className="awsq-meta-item">
                <div className="awsq-meta-label">Representante Legal</div>
                <div className="awsq-meta-val">Juan García</div>
              </div>
              <div className="awsq-meta-item">
                <div className="awsq-meta-label">Correo Oficial Verificado</div>
                <div className="awsq-meta-val">awssidethequest@gmail.com</div>
              </div>
              <div className="awsq-meta-item">
                <div className="awsq-meta-label">Dominio &amp; Ubicación</div>
                <div className="awsq-meta-val">awsqconsole.info · Cartagena, Colombia</div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', background: 'rgba(11,15,25,0.7)', padding: '28px', borderRadius: '12px', border: '1px solid var(--awsq-card-border)' }}>
            <div style={{ fontSize: '32px', marginBottom: '10px' }}>🔒</div>
            <div style={{ fontWeight: '700', fontSize: '15px', color: 'var(--awsq-text-primary)', marginBottom: '6px' }}>
              Pagos 100% Protegidos
            </div>
            <div style={{ fontSize: '12px', color: 'var(--awsq-text-secondary)', marginBottom: '16px', lineHeight: '1.5' }}>
              Transacciones cifradas bajo estándar PCI-DSS a través de dLocal Go, PayPal y Stripe.
            </div>
            <Link href="/terms" className="awsq-btn awsq-btn-outline" style={{ fontSize: '12px', padding: '8px 16px' }}>
              Consultar Políticas
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
