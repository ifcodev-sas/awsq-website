import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Términos y Condiciones | AWSQ - Advanced Web Software & Quality',
  description: 'Términos y condiciones de contratación y uso de servicios de AWSQ (Advanced Web Software & Quality).',
};

export default function TermsPage() {
  return (
    <div>
      <Navbar />

      <main className="awsq-legal-container">
        <div className="awsq-legal-header">
          <div className="awsq-badge-pill">Marco Legal y Contractual</div>
          <h1 className="awsq-legal-title">Términos y Condiciones de Uso y Contratación</h1>
          <div className="awsq-legal-updated">Última actualización: 10 de noviembre de 2026 · Versión 1.2</div>
        </div>

        <article className="awsq-legal-content">
          <p>
            Bienvenido a <strong>AWSQ (Advanced Web Software &amp; Quality)</strong>. El presente documento establece los términos y condiciones vinculantes que rigen el acceso, contratación y uso de nuestros servicios profesionales de arquitectura de nube (AWS Cloud Architecture), ingeniería de software web, aseguramiento de la calidad de software (QA), DevOps, administración de infraestructura y optimización de facturación tecnológica.
          </p>

          <h2>1. Identificación del Prestador del Servicio</h2>
          <p>
            El titular y operador de los servicios descritos en esta plataforma es <strong>AWSQ (Advanced Web Software &amp; Quality)</strong>, liderada por <strong>Juan García</strong> en calidad de representante y director técnico, con domicilio en Cartagena de Indias, Colombia, y canal oficial de atención al cliente y notificaciones legales: <strong>awssidethequest@gmail.com</strong>.
          </p>

          <h2>2. Objeto y Alcance de los Servicios</h2>
          <p>
            AWSQ proporciona servicios tecnológicos y digitales especializados a empresas nacionales e internacionales, entre los que se incluyen:
          </p>
          <ul>
            <li><strong>Arquitectura y Administración Cloud en AWS:</strong> Configuración, aprovisionamiento, seguridad, balanceo de carga y administración de servicios de Amazon Web Services (EC2, S3, RDS, CloudWatch, VPC, Amplify, Lambda, CloudFormation, entre otros).</li>
            <li><strong>Desarrollo de Software Web a Medida:</strong> Diseño, implementación y mantenimiento de sistemas web avanzados, microservicios y plataformas escalables.</li>
            <li><strong>Software Quality Assurance (QA):</strong> Implementación de pruebas automatizadas, pruebas de integración, auditorías de rendimiento, pruebas de seguridad y control de calidad de código fuente.</li>
            <li><strong>Monitoreo y Facturación Cloud (FinOps):</strong> Telemetría en tiempo real, consolidación de consumos, auditoría de costos de computación y portal de control de facturación para clientes.</li>
          </ul>

          <h2>3. Contratación, Precios y Modalidades de Pago</h2>
          <p>
            Los servicios se contratan bajo dos modalidades principales:
          </p>
          <ul>
            <li><strong>Proyectos Específicos o Auditorías Técnicas:</strong> Se acuerda un alcance cerrado con un entregable definido y una tarifa fija en dólares de los Estados Unidos (USD).</li>
            <li><strong>Suscripción Mensual / Retainer de Infraestructura y QA:</strong> Cobro mensual recurrente o consumo acumulado (MTD) por horas de ingeniería, soporte y recursos administrados, facturados según el ciclo pactado.</li>
          </ul>
          <p>
            Los pagos se procesan de manera segura a través de pasarelas de pago internacionales certificadas, tales como <strong>dLocal Go</strong>, <strong>PayPal</strong> y <strong>Stripe</strong>. Al registrar una tarjeta de crédito o efectuar un pago, el cliente autoriza la liquidación correspondiente al servicio pactado conforme a la factura generada en la consola.
          </p>

          <h2>4. Obligaciones y Declaraciones del Cliente</h2>
          <p>El cliente se compromete a:</p>
          <ul>
            <li>Proporcionar información veraz, actualizada y comprobable respecto a su identidad corporativa, NIT/RUT o identificación fiscal internacional.</li>
            <li>Facilitar las credenciales, repositorios o accesos mínimos necesarios para la ejecución técnica de las tareas contratadas, bajo acuerdos de confidencialidad (NDA).</li>
            <li>Realizar el pago de las facturas emitidas a más tardar en la fecha de vencimiento señalada (día 5 de cada mes calendario o fecha estipulada en la factura).</li>
          </ul>

          <h2>5. Propiedad Intelectual</h2>
          <p>
            Salvo estipulación expresa en contrario en un contrato específico, todo el código fuente personalizado, configuraciones de infraestructura y desarrollos desarrollados a medida para el cliente pasarán a ser propiedad exclusiva del cliente una vez se haya cancelado la totalidad del importe correspondiente al proyecto. AWSQ se reserva los derechos sobre metodologías propias, herramientas internas de auditoría y librerías preexistentes.
          </p>

          <h2>6. Acuerdos de Nivel de Servicio (SLA) y Disponibilidad</h2>
          <p>
            AWSQ garantiza los más altos estándares de calidad técnica en la industria:
          </p>
          <ul>
            <li>Tiempo de respuesta para soporte crítico de infraestructura: inferior a 2 horas en planes Enterprise.</li>
            <li>Garantía técnica de pruebas QA con cobertura de pruebas automatizadas superior al 85% en módulos críticos.</li>
            <li>Para detalles adicionales sobre tiempos de entrega y despliegue, consulte nuestra <a href="/delivery" style={{ color: 'var(--awsq-orange-light)' }}>Política de Prestación de Servicios y SLA</a>.</li>
          </ul>

          <h2>7. Cancelación y Terminación del Servicio</h2>
          <p>
            Cualquiera de las partes podrá dar por terminado un acuerdo mensual de servicios mediante notificación escrita enviada con al menos quince (15) días calendario de anticipación al correo <strong>awssidethequest@gmail.com</strong>. Para conocer las condiciones bajo las cuales aplica un reintegro económico, consulte nuestra <a href="/refunds" style={{ color: 'var(--awsq-orange-light)' }}>Política de Reembolso y Devolución</a>.
          </p>

          <h2>8. Confidencialidad y Protección de Datos</h2>
          <p>
            Toda la información estratégica, bases de datos y credenciales suministradas por el cliente serán tratadas bajo estricta confidencialidad comercial y protegidas mediante cifrado AES-256. El tratamiento de datos personales se rige por nuestra <a href="/privacy" style={{ color: 'var(--awsq-orange-light)' }}>Política de Privacidad</a>.
          </p>

          <h2>9. Legislación Aplicable y Jurisdicción</h2>
          <p>
            Estos términos se rigen e interpretan bajo las leyes de la República de Colombia y los tratados internacionales de comercio electrónico y servicios transfronterizos. Cualquier controversia será resuelta de mutuo acuerdo mediante conciliación directa; de no haber acuerdo, las partes se someten a los juzgados competentes de Cartagena, Colombia.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
