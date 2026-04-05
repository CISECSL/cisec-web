import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de CISEC - Consultoría de Inteligencia y Securización SL. Información sobre el tratamiento de datos personales.",
  alternates: { canonical: "/privacidad" },
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: "Política de Privacidad", href: "/privacidad" },
          ]}
        />
        <h1>Política de Privacidad</h1>

        <div className="mt-10 space-y-10 text-sm leading-relaxed text-muted-foreground [&_h2]:mt-10 [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:text-foreground [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-primary [&_a]:underline [&_a:hover]:text-primary/80">
          {/* SECCIÓN 1 */}
          <div>
            <h2>1. Información al usuario</h2>

            <h3>¿Quién es el responsable del tratamiento de tus datos personales?</h3>
            <p>
              Consultoría de Inteligencia y Securización S.L., con NIF B24850877, es la RESPONSABLE del tratamiento de los datos personales del USUARIO y le informa de que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril (GDPR), y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD).
            </p>

            <h3>¿Para qué tratamos tus datos personales?</h3>
            <p>
              Para mantener una relación comercial con el usuario. Las operaciones previstas para realizar el tratamiento son:
            </p>
            <ul>
              <li>Remisión de comunicaciones comerciales publicitarias por e-mail, fax, SMS, MMS, redes sociales o cualquier otro medio electrónico o físico, presente o futuro, que posibilite realizar comunicaciones comerciales. Estas comunicaciones serán realizadas por el RESPONSABLE y estarán relacionadas con sus productos y servicios, o de sus colaboradores o proveedores, con los que este haya alcanzado algún acuerdo de promoción. En este caso, los terceros nunca tendrán acceso a los datos personales.</li>
              <li>Realizar estudios de mercado y análisis estadísticos.</li>
              <li>Tramitar encargos, solicitudes, dar respuesta a las consultas o cualquier tipo de petición que sea realizada por el USUARIO a través de cualquiera de las formas de contacto que se ponen a su disposición en la página web del RESPONSABLE.</li>
              <li>Remitir el boletín informativo online, sobre novedades, ofertas y promociones en nuestra actividad.</li>
            </ul>

            <h3>¿Por qué motivo podemos tratar tus datos personales?</h3>
            <p>
              Porque el tratamiento está legitimado por el artículo 6 del GDPR de la siguiente forma:
            </p>
            <ul>
              <li><strong>Con el consentimiento del USUARIO:</strong> remisión de comunicaciones comerciales y del boletín informativo.</li>
              <li><strong>Por interés legítimo del RESPONSABLE:</strong> realizar estudios de mercado, análisis estadísticos, etc. y tramitar encargos, solicitudes, etc. a petición del USUARIO.</li>
            </ul>

            <h3>¿Durante cuánto tiempo guardaremos tus datos personales?</h3>
            <p>
              Se conservarán durante no más tiempo del necesario para mantener el fin del tratamiento o existan prescripciones legales que dictaminen su custodia y cuando ya no sea necesario para ello, se suprimirán con medidas de seguridad adecuadas para garantizar la anonimización de los datos o la destrucción total de los mismos.
            </p>

            <h3>¿A quién facilitamos tus datos personales?</h3>
            <p>
              No está prevista ninguna comunicación de datos personales a terceros salvo, si fuese necesario para el desarrollo y ejecución de las finalidades del tratamiento, a nuestros proveedores de servicios relacionados con comunicaciones, con los cuales el RESPONSABLE tiene suscritos los contratos de confidencialidad y de encargado de tratamiento exigidos por la normativa vigente de privacidad.
            </p>

            <h3>¿Cuáles son tus derechos?</h3>
            <p>Los derechos que asisten al USUARIO son:</p>
            <ul>
              <li>Derecho a retirar el consentimiento en cualquier momento.</li>
              <li>Derecho de acceso, rectificación, portabilidad y supresión de sus datos, y de limitación u oposición a su tratamiento.</li>
              <li>Derecho a presentar una reclamación ante la autoridad de control (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>) si considera que el tratamiento no se ajusta a la normativa vigente.</li>
            </ul>
            <p>
              <strong>Datos de contacto para ejercer sus derechos:</strong><br />
              Consultoría de Inteligencia y Securización S.L. Madrid.<br />
              E-mail: <a href="mailto:amorales@cisec.es">amorales@cisec.es</a>
            </p>
          </div>

          {/* SECCIÓN 2 */}
          <div>
            <h2>2. Carácter obligatorio o facultativo de la información facilitada por el usuario</h2>
            <p>
              Los USUARIOS, mediante la marcación de las casillas correspondientes y la entrada de datos en los campos, marcados con un asterisco (*) en el formulario de contacto o presentados en formularios de descarga, aceptan expresamente y de forma libre e inequívoca, que sus datos son necesarios para atender su petición, por parte del prestador, siendo voluntaria la inclusión de datos en los campos restantes. El USUARIO garantiza que los datos personales facilitados al RESPONSABLE son veraces y se hace responsable de comunicar cualquier modificación de los mismos.
            </p>
            <p>
              El RESPONSABLE informa de que todos los datos solicitados a través del sitio web son obligatorios, ya que son necesarios para la prestación de un servicio óptimo al USUARIO. En caso de que no se faciliten todos los datos, no se garantiza que la información y servicios facilitados sean completamente ajustados a sus necesidades.
            </p>
          </div>

          {/* SECCIÓN 3 */}
          <div>
            <h2>3. Medidas de seguridad</h2>
            <p>
              De conformidad con lo dispuesto en las normativas vigentes en protección de datos personales, el RESPONSABLE está cumpliendo con todas las disposiciones de las normativas GDPR y LOPDGDD para el tratamiento de los datos personales de su responsabilidad, y manifiestamente con los principios descritos en el artículo 5 del GDPR, por los cuales son tratados de manera lícita, leal y transparente en relación con el interesado y adecuados, pertinentes y limitados a lo necesario en relación con los fines para los que son tratados.
            </p>
            <p>
              El RESPONSABLE garantiza que ha implementado políticas técnicas y organizativas apropiadas para aplicar las medidas de seguridad que establecen el GDPR y la LOPDGDD con el fin de proteger los derechos y libertades de los USUARIOS y les ha comunicado la información adecuada para que puedan ejercerlos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
