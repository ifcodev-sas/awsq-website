import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Política de Entrega y Prestación de Servicios | AWSQ - Advanced Web Software & Quality',
  description: 'Tiempos de entrega, métodos de distribución digital y SLA de AWSQ (Advanced Web Software & Quality).',
};

export default function DeliveryPage() {
  return (
    <div>
      <Navbar />

      <main className="awsq-legal-container">
        <div className="awsq-legal-header">
          <div className="awsq-badge-pill">Distribución Digital y Tiempos de Entrega</div>
          <h1 className="awsq-legal-title">Política de Prestación y Entrega de Servicios Digitales</h1>
          <div className="awsq-legal-updated">Última actualización: 10 de noviembre de 2026 · Versión 1.2</div>
        </div>

        <article className="awsq-legal-content">
          <p>
            En <strong>AWSQ (Advanced Web Software &amp; Quality)</strong>, todas nuestras operaciones y soluciones tecnológicas son de carácter 100% digital e intangible. Esta política describe de forma transparente los canales, métodos de entrega, plazos de activación y criterios de cumplimiento de nuestros servicios en la nube, desarrollo de software y aseguramiento de calidad (QA).
          </p>

          <h2>1. Canales y Métodos de Entrega Digital</h2>
          <p>
            Al tratarse de servicios de computación en la nube y desarrollo de software, <strong>no se realizan envíos físicos de paquetería ni mercancías tangibles</strong>. La entrega de todos los productos y servicios se realiza a través de medios digitales seguros:
          </p>
          <ul>
            <li><strong>Acceso a la Consola de Clientes (Billing &amp; Management Console):</strong> Habilitación de credenciales exclusivas en el portal para la visualización en tiempo real de métricas, telemetría de costos, descarga de facturas y pasarelas de pago.</li>
            <li><strong>Aprovisionamiento de Infraestructura en la Nube:</strong> Despliegue de plantillas de infraestructura como código (Terraform / AWS CloudFormation), configuración de entornos en Amazon Web Services (VPC, EC2, S3, RDS, ECS) y transferencia de accesos administrativos mediante roles IAM bajo el principio de mínimo privilegio.</li>
            <li><strong>Repositorios de Código Fuente:</strong> Transferencia de ramas y repositorios versionados (GitHub / GitLab / AWS CodeCommit) con documentación técnica de despliegue y manuales de arquitectura.</li>
            <li><strong>Reportes de Calidad y Pruebas QA:</strong> Informes ejecutivos y técnicos de cobertura de pruebas, matrices de pruebas automatizadas (Cypress, Playwright, Jest), análisis estático de vulnerabilidades y certificaciones de calidad de software en formato digital (PDF / HTML interactivo).</li>
          </ul>

          <h2>2. Tiempos y Plazos de Entrega (SLA)</h2>
          <p>Los plazos de ejecución y entrega se rigen por los siguientes estándares:</p>
          <ul>
            <li><strong>Habilitación de Cuenta en Consola y Portal de Clientes:</strong> Inmediata a máximo veinticuatro (24) horas hábiles posteriores a la confirmación del pago o formalización del acuerdo.</li>
            <li><strong>Auditorías Técnicas y Diagnóstico Cloud (Cloud Assessment):</strong> Entre tres (3) y cinco (5) días hábiles contados a partir de la recepción de accesos técnicos mínimos necesarios.</li>
            <li><strong>Planes Mensuales de DevOps &amp; QA Retainer:</strong> Activación del monitoreo y soporte dentro de las veinticuatro (24) horas siguientes a la contratación. Tiempos de respuesta para soporte técnico:
              <ul>
                <li>Incidencias críticas (bloqueo total de producción): menos de 2 horas.</li>
                <li>Incidencias moderadas: menos de 8 horas hábiles.</li>
                <li>Consultas generales y requerimientos regulares: menos de 24 horas.</li>
              </ul>
            </li>
            <li><strong>Proyectos de Desarrollo de Software a Medida:</strong> Se entregan conforme al cronograma de hitos pactado contractualmente en la propuesta de trabajo, con *sprints* quincenales y entregas continuas en ambientes de prueba (*staging*).</li>
          </ul>

          <h2>3. Confirmación y Aceptación de Entregables</h2>
          <p>
            Una vez finalizado el despliegue o la entrega de un módulo:
          </p>
          <ul>
            <li>Se remitirá una notificación formal por correo electrónico desde <strong>awssidethequest@gmail.com</strong> detallando los accesos y entregables.</li>
            <li>El cliente dispone de un periodo de revisión de cinco (5) días hábiles para validar la funcionalidad y reportar cualquier observación o discrepancia con el acuerdo pactado.</li>
            <li>De no presentarse observaciones dentro de dicho periodo, el servicio se considerará formalmente aceptado a satisfacción.</li>
          </ul>

          <h2>4. Gastos de Envío e Impuestos</h2>
          <p>
            Dado que la totalidad de los entregables se transfieren a través de redes electrónicas y entornos de nube, <strong>los costos de envío son cero ($0.00 USD)</strong>. Todos los precios exhibidos en las cotizaciones y facturas corresponden al valor neto del servicio digital y sus componentes tecnológicos asociados.
          </p>

          <h2>5. Soporte y Asistencia con la Entrega</h2>
          <p>
            Si experimenta dificultades para acceder a sus credenciales de la consola, repositorios de código o entornos de nube aprovisionados, contacte de inmediato a nuestro equipo de soporte técnico a través del correo <strong>awssidethequest@gmail.com</strong>.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
