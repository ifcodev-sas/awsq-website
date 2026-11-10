import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Política de Reembolso y Devolución | AWSQ - Advanced Web Software & Quality',
  description: 'Términos de garantía, cancelación y política de reembolsos de AWSQ (Advanced Web Software & Quality).',
};

export default function RefundsPage() {
  return (
    <div>
      <Navbar />

      <main className="awsq-legal-container">
        <div className="awsq-legal-header">
          <div className="awsq-badge-pill">Garantía y Transparencia Financiera</div>
          <h1 className="awsq-legal-title">Política de Reembolso, Cancelación y Devoluciones</h1>
          <div className="awsq-legal-updated">Última actualización: 10 de noviembre de 2026 · Versión 1.2</div>
        </div>

        <article className="awsq-legal-content">
          <p>
            En <strong>AWSQ (Advanced Web Software &amp; Quality)</strong> nos esforzamos por ofrecer servicios tecnológicos de clase mundial con el más alto rigor de ingeniería, arquitectura cloud y aseguramiento de calidad. La presente Política de Reembolso y Cancelación detalla de manera transparente las condiciones, plazos y procedimientos bajo los cuales un cliente corporativo puede solicitar la cancelación de un servicio o la restitución de fondos.
          </p>

          <h2>1. Naturaleza de los Servicios Digitales</h2>
          <p>
            Los servicios suministrados por AWSQ corresponden a <strong>servicios profesionales intangibles de tecnología, consultoría, desarrollo de software, pruebas QA y aprovisionamiento de infraestructura en la nube</strong>. Dado que estos servicios involucran asignación de tiempo de ingenieros especializados y consumo directo de recursos de cómputo en AWS (EC2, S3, RDS, ancho de banda, etc.), los reembolsos se gestionan de acuerdo con las condiciones específicas descritas a continuación.
          </p>

          <h2>2. Casos en los que Aplica Reembolso Total (100%)</h2>
          <p>El cliente tendrá derecho al reembolso íntegro de su pago en las siguientes circunstancias:</p>
          <ul>
            <li><strong>Cobros Duplicados o Errores de Procesamiento:</strong> Si por un error técnico de la pasarela de pago (dLocal Go, PayPal o Stripe) se procesa un cobro doble o un monto superior al estipulado en la factura oficial emitida.</li>
            <li><strong>Cancelación Previa al Inicio del Proyecto:</strong> Si el cliente solicita por escrito la cancelación de una auditoría o proyecto cerrado dentro de las cuarenta y ocho (48) horas siguientes al pago y antes de que se haya iniciado la fase técnica de ejecución o el aprovisionamiento de recursos.</li>
            <li><strong>Imposibilidad Técnica Atribuible a AWSQ:</strong> Si por causas de fuerza mayor o fallas técnicas imputables exclusivamente a nuestro equipo técnico no es posible iniciar la prestación del servicio contratado.</li>
          </ul>

          <h2>3. Casos de Reembolso Parcial / Ajuste en Facturación</h2>
          <ul>
            <li><strong>Incumplimiento de SLA o Fallas Críticas de Despliegue:</strong> Si un entregable técnico o servicio bajo contrato mensual no cumple con los criterios de aceptación y calidad (QA) formalmente acordados, y no es subsanado dentro del periodo de corrección pactado (cinco días hábiles), se emitirá una nota de crédito o reembolso proporcional al módulo no ejecutado.</li>
            <li><strong>Diferencias en Consumo Cloud:</strong> Si tras una auditoría de consumos se demuestra una discrepancia técnica entre la telemetría real de AWS y el valor liquidado en la factura, se abonará el saldo a favor en la siguiente factura o se restituirá la diferencia a la tarjeta del cliente.</li>
          </ul>

          <h2>4. Servicios No Reembolsables</h2>
          <p>No son susceptibles de reembolso los siguientes conceptos:</p>
          <ul>
            <li>Servicios de consultoría, horas de ingeniería, auditorías técnicas o pruebas QA que ya hayan sido ejecutadas y recibidas a satisfacción por el cliente.</li>
            <li>Costos directos facturados por terceros proveedores de infraestructura (por ejemplo, cargos devengados directamente por Amazon Web Services, dominios o licencias adquiridas a nombre del cliente).</li>
            <li>Cancelaciones solicitadas una vez transcurrido el periodo de garantía o fuera de los plazos establecidos.</li>
          </ul>

          <h2>5. Procedimiento para Solicitar un Reembolso</h2>
          <p>Para tramitar cualquier solicitud de reintegro o aclaración de cargos:</p>
          <ol style={{ paddingLeft: '24px', margin: '0 0 16px' }}>
            <li>Envíe un correo electrónico formal a <strong>awssidethequest@gmail.com</strong> con el asunto: <code>SOLICITUD DE REEMBOLSO - [Número de Factura o ID de Transacción]</code>.</li>
            <li>Indique la razón social de la empresa, nombre del titular, comprobante de pago emitido por la pasarela y la justificación técnica de la solicitud.</li>
            <li>Nuestro equipo técnico y administrativo revisará la solicitud y emitirá una respuesta oficial en un plazo máximo de tres (3) días hábiles.</li>
          </ol>

          <h2>6. Plazos y Métodos de Devolución del Dinero</h2>
          <p>
            Una vez aprobada la solicitud de reembolso:
          </p>
          <ul>
            <li>La orden de reembolso se enviará de inmediato a la misma pasarela con la que se efectuó el pago original (<strong>dLocal Go</strong>, <strong>PayPal</strong> o <strong>Stripe</strong>).</li>
            <li>El dinero se acreditará automáticamente en el estado de cuenta de la tarjeta de crédito/débito o en el balance de la cuenta de origen.</li>
            <li>Los tiempos de reflejo bancario dependen de la entidad financiera del cliente, variando habitualmente entre <strong>cinco (5) y diez (10) días hábiles</strong>.</li>
          </ul>

          <h2>7. Política de Cancelación de Planes Mensuales</h2>
          <p>
            Para servicios mensuales recurrentes o *retainers* de soporte cloud, el cliente puede cancelar su suscripción en cualquier momento enviando un correo a <strong>awssidethequest@gmail.com</strong> con un mínimo de quince (15) días de antelación al inicio del siguiente ciclo de facturación. No se realizarán cobros adicionales a partir de la fecha efectiva de cancelación.
          </p>

          <h2>8. Contacto Directo para Dudas sobre Cobros</h2>
          <p>
            Si tiene alguna inquietud sobre un cargo en su tarjeta o requiere asistencia prioritaria con una factura, comuníquese directamente con nuestro representante Juan García al correo <strong>awssidethequest@gmail.com</strong> antes de iniciar una disputa bancaria; le garantizamos una resolución ágil y transparente.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
