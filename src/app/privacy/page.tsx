import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Política de Privacidad | AWSQ - Advanced Web Software & Quality',
  description: 'Tratamiento y protección de datos personales de AWSQ (Advanced Web Software & Quality).',
};

export default function PrivacyPage() {
  return (
    <div>
      <Navbar />

      <main className="awsq-legal-container">
        <div className="awsq-legal-header">
          <div className="awsq-badge-pill">Seguridad y Cumplimiento de Datos</div>
          <h1 className="awsq-legal-title">Política de Privacidad y Tratamiento de Datos</h1>
          <div className="awsq-legal-updated">Última actualización: 10 de noviembre de 2026 · Versión 1.2</div>
        </div>

        <article className="awsq-legal-content">
          <p>
            En <strong>AWSQ (Advanced Web Software &amp; Quality)</strong>, la privacidad, integridad y seguridad de la información de nuestros clientes corporativos y usuarios es un compromiso fundamental. Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos sus datos de conformidad con la <strong>Ley Estatutaria 1581 de 2012</strong> de la República de Colombia y los más exigentes estándares internacionales (como el GDPR de la Unión Europea).
          </p>

          <h2>1. Responsable del Tratamiento de los Datos</h2>
          <p>
            El responsable del tratamiento de los datos personales es <strong>AWSQ (Advanced Web Software &amp; Quality)</strong>, representada legalmente por <strong>Juan García</strong>. Para ejercer sus derechos de consulta, actualización o supresión de datos, puede comunicarse directamente al correo electrónico de privacidad: <strong>awssidethequest@gmail.com</strong>.
          </p>

          <h2>2. Información que Recopilamos</h2>
          <p>
            Recopilamos únicamente la información necesaria para la relación comercial, la emisión de facturación legal y la prestación técnica de servicios:
          </p>
          <ul>
            <li><strong>Datos de Identificación y Contacto:</strong> Nombre completo, razón social de la empresa, número de identificación tributaria (NIT, RUT o Tax ID), dirección física de facturación, correo electrónico corporativo y teléfono de contacto.</li>
            <li><strong>Datos de Facturación y Transacciones:</strong> Historial de consumos de servicios de infraestructura, número de factura, valor liquidado, fecha de emisión, fecha de vencimiento y estado de pago.</li>
            <li><strong>Datos Financieros y Pasarelas de Pago:</strong> No almacenamos números completos de tarjetas de crédito ni códigos CVC en nuestros servidores. Toda la captura de pagos se procesa a través de tokens cifrados suministrados por pasarelas seguras certificadas PCI-DSS Nivel 1 (como <strong>dLocal Go</strong>, <strong>PayPal</strong> y <strong>Stripe</strong>). En nuestra base de datos solo se almacena la marca de la tarjeta y los últimos 4 dígitos con fines de referencia y auditoría del cliente.</li>
            <li><strong>Datos Técnicos de Navegación:</strong> Dirección IP, registros de auditoría de inicio de sesión (*audit logs*), tipo de navegador y marcas de tiempo, utilizados exclusivamente para prevenir fraudes e intrusiones no autorizadas a la consola de clientes.</li>
          </ul>

          <h2>3. Finalidades del Tratamiento de Datos</h2>
          <p>Sus datos personales son tratados con las siguientes finalidades legítimas:</p>
          <ul>
            <li>Gestionar el alta de la cuenta y habilitar el acceso seguro a la consola de administración de facturación de AWSQ.</li>
            <li>Generar las facturas comerciales mensuales, desgloses de servicios de nube y certificados contables en formato PDF.</li>
            <li>Procesar cobros autorizados mediante pasarelas de pago aliadas (dLocal Go, PayPal, Stripe).</li>
            <li>Notificar sobre vencimientos de facturas, cambios en los servicios, incidencias de infraestructura o actualizaciones de seguridad.</li>
            <li>Cumplir con las obligaciones legales, tributarias y contables ante las autoridades colombianas e internacionales.</li>
          </ul>

          <h2>4. No Comercialización ni Cesión de Datos</h2>
          <p>
            <strong>AWSQ no vende, alquila, comercializa ni cede bajo ninguna circunstancia los datos personales o estratégicos de sus clientes a terceros</strong> con fines publicitarios o ajenos a la prestación de los servicios contratados. Los datos solo se comparten con proveedores tecnológicos indispensables (pasarelas de pago, entidades bancarias y servidores de correo transaccional) bajo estrictos acuerdos de confidencialidad y procesamiento seguro.
          </p>

          <h2>5. Medidas de Seguridad de la Información</h2>
          <p>
            Implementamos controles técnicos y administrativos de nivel bancario:
          </p>
          <ul>
            <li>Transmisión cifrada de extremo a extremo mediante certificados TLS/SSL modernos (HTTPS con Caddy y cifrado robusto).</li>
            <li>Contraseñas almacenadas mediante algoritmos de hashing seguro *bcrypt* con factor de trabajo reforzado.</li>
            <li>Aislamiento de bases de datos en redes privadas virtuales (VPC en AWS) con cortafuegos y grupos de seguridad restringidos por IP.</li>
            <li>Auditorías periódicas de accesos y registros inmutables de transacciones.</li>
          </ul>

          <h2>6. Derechos de los Titulares (Habeas Data)</h2>
          <p>
            Usted como titular de la información tiene derecho en cualquier momento a:
          </p>
          <ul>
            <li>Conocer, actualizar y rectificar sus datos personales frente a información inexacta o incompleta.</li>
            <li>Solicitar prueba de la autorización otorgada para el tratamiento de sus datos.</li>
            <li>Revocar la autorización o solicitar la supresión de sus datos cuando considere que no se respetan los principios legales vigentes.</li>
            <li>Acceder de forma gratuita a sus datos personales que hayan sido objeto de tratamiento.</li>
          </ul>
          <p>
            Para ejercer cualquiera de estos derechos, basta con enviar una solicitud formal por escrito a <strong>awssidethequest@gmail.com</strong> indicando su nombre, documento de identidad y la descripción de la consulta o reclamo. Responderemos en un término máximo de diez (10) días hábiles.
          </p>

          <h2>7. Modificaciones a la Política de Privacidad</h2>
          <p>
            AWSQ se reserva el derecho de actualizar esta política para adaptarla a novedades legislativas o mejoras en nuestras plataformas. Toda modificación sustancial será notificada a través del correo electrónico corporativo registrado o mediante un aviso destacado en nuestro sitio web.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
