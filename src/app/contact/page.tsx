'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div>
      <Navbar />

      <main className="awsq-legal-container" style={{ maxWidth: '1000px' }}>
        <div className="awsq-legal-header" style={{ textAlign: 'center' }}>
          <div className="awsq-badge-pill">Atención Corporativa y Soporte 24/7</div>
          <h1 className="awsq-legal-title">Contacto y Soporte Técnico AWSQ</h1>
          <p className="awsq-section-desc" style={{ maxWidth: '640px', margin: '0 auto' }}>
            Estamos listos para impulsar la arquitectura cloud, desarrollo de software y calidad de tu empresa. Escríbenos o accede a tu consola de cliente.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '32px', marginBottom: '60px' }}>
          {/* Tarjeta de Información Oficial (dLocal Go Compliance) */}
          <div style={{ background: 'var(--awsq-card-bg)', border: '1px solid var(--awsq-card-border)', borderRadius: '14px', padding: '36px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '800', margin: '0 0 20px', color: 'var(--awsq-text-primary)' }}>
              Información de la Empresa
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '14px' }}>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--awsq-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Razón Comercial</div>
                <div style={{ fontWeight: '700', color: 'var(--awsq-text-primary)', marginTop: '2px' }}>AWSQ - Advanced Web Software &amp; Quality</div>
              </div>

              <div>
                <div style={{ fontSize: '11px', color: 'var(--awsq-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Representante &amp; Liderazgo</div>
                <div style={{ fontWeight: '600', color: 'var(--awsq-text-primary)', marginTop: '2px' }}>Juan García · Fundador &amp; Director de Operaciones</div>
              </div>

              <div>
                <div style={{ fontSize: '11px', color: 'var(--awsq-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Correo Electrónico Oficial</div>
                <a href="mailto:awssidethequest@gmail.com" style={{ color: 'var(--awsq-orange-light)', fontWeight: '600', textDecoration: 'none', marginTop: '2px', display: 'inline-block' }}>
                  awssidethequest@gmail.com
                </a>
              </div>

              <div>
                <div style={{ fontSize: '11px', color: 'var(--awsq-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Dominio Corporativo</div>
                <div style={{ fontWeight: '600', color: 'var(--awsq-text-primary)', marginTop: '2px' }}>awsqconsole.info</div>
              </div>

              <div>
                <div style={{ fontSize: '11px', color: 'var(--awsq-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Ubicación Principal</div>
                <div style={{ color: 'var(--awsq-text-secondary)', marginTop: '2px' }}>
                  Cartagena de Indias, Bolívar, Colombia (Atención a clientes internacionales en EE.UU., LATAM y Europa)
                </div>
              </div>

              <div style={{ marginTop: '10px', paddingTop: '20px', borderTop: '1px solid var(--awsq-card-border)' }}>
                <div style={{ fontSize: '12px', color: 'var(--awsq-text-muted)', marginBottom: '12px' }}>¿Ya eres cliente activo?</div>
                <a
                  href="https://awsq.console.quest.side.awsq-2.nodhus.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="awsq-btn awsq-btn-primary"
                  style={{ width: '100%', boxSizing: 'border-box' }}
                >
                  Ingresar a mi Consola AWS
                </a>
              </div>
            </div>
          </div>

          {/* Formulario de Mensaje */}
          <div style={{ background: 'var(--awsq-card-bg)', border: '1px solid var(--awsq-card-border)', borderRadius: '14px', padding: '36px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(236,114,17,0.15)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--awsq-orange-light)', fontSize: '28px', marginBottom: '20px' }}>
                  ✓
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', margin: '0 0 10px', color: 'var(--awsq-text-primary)' }}>
                  ¡Mensaje Enviado con Éxito!
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--awsq-text-secondary)', margin: '0 0 24px' }}>
                  Gracias por comunicarte con AWSQ. Un ingeniero de nuestro equipo revisará tu requerimiento y te contactará a través de <strong>awssidethequest@gmail.com</strong> en menos de 24 horas.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="awsq-btn awsq-btn-outline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '20px', fontWeight: '800', margin: '0 0 8px', color: 'var(--awsq-text-primary)' }}>
                  Envíanos un Mensaje
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--awsq-text-secondary)', margin: '0 0 24px' }}>
                  Solicita una cotización, auditoría técnica de AWS o aclara dudas sobre tu facturación.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: 'var(--awsq-text-secondary)', marginBottom: '6px' }}>
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Juan Pérez"
                      style={{ width: '100%', boxSizing: 'border-box', padding: '12px 14px', background: 'rgba(11,15,25,0.7)', border: '1px solid var(--awsq-card-border)', borderRadius: '8px', color: '#fff', fontSize: '14px', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: 'var(--awsq-text-secondary)', marginBottom: '6px' }}>
                      Correo Electrónico Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nombre@empresa.com"
                      style={{ width: '100%', boxSizing: 'border-box', padding: '12px 14px', background: 'rgba(11,15,25,0.7)', border: '1px solid var(--awsq-card-border)', borderRadius: '8px', color: '#fff', fontSize: '14px', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: 'var(--awsq-text-secondary)', marginBottom: '6px' }}>
                      Servicio de Interés
                    </label>
                    <select
                      style={{ width: '100%', boxSizing: 'border-box', padding: '12px 14px', background: '#0b0f19', border: '1px solid var(--awsq-card-border)', borderRadius: '8px', color: '#fff', fontSize: '14px', outline: 'none' }}
                    >
                      <option value="cloud">Arquitectura AWS Cloud &amp; DevOps</option>
                      <option value="software">Desarrollo de Software Web Full-Stack</option>
                      <option value="qa">Software Quality Assurance (QA) &amp; Testing</option>
                      <option value="billing">Optimización de Costos &amp; Facturación Cloud</option>
                      <option value="support">Soporte Técnico o Aclaración de Pagos</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: 'var(--awsq-text-secondary)', marginBottom: '6px' }}>
                      Mensaje o Descripción del Requerimiento *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Cuéntanos brevemente sobre tu proyecto o consulta..."
                      style={{ width: '100%', boxSizing: 'border-box', padding: '12px 14px', background: 'rgba(11,15,25,0.7)', border: '1px solid var(--awsq-card-border)', borderRadius: '8px', color: '#fff', fontSize: '14px', outline: 'none', resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="awsq-btn awsq-btn-primary"
                    style={{ marginTop: '8px', width: '100%' }}
                  >
                    {loading ? 'Enviando...' : 'Enviar Mensaje a AWSQ'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
