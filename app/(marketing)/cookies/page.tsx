import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Política de cookies de CISEC - Consultoría de Inteligencia y Securización SL. Información sobre el uso de cookies en cisec.es.",
  alternates: { canonical: "/cookies" },
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[{ name: "Política de Cookies", href: "/cookies" }]}
        />
        <h1>Política de Cookies</h1>

        <div className="mt-10 space-y-10 text-sm leading-relaxed text-muted-foreground [&_h2]:mt-10 [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:text-foreground [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-primary [&_a]:underline [&_a:hover]:text-primary/80">
          {/* AVISO LEGAL */}
          <div>
            <p>
              Álvaro Morales Moreno, responsable del sitio web, en adelante RESPONSABLE, pone a disposición de los usuarios el presente documento, con el que pretende dar cumplimiento a las obligaciones dispuestas en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), BOE N.o 166, así como informar a todos los usuarios del sitio web respecto a cuáles son las condiciones de uso.
            </p>
            <p>
              Toda persona que acceda a este sitio web asume el papel de usuario, comprometiéndose a la observancia y cumplimiento riguroso de las disposiciones aquí dispuestas, así como a cualquier otra disposición legal que fuera de aplicación.
            </p>
            <p>
              Álvaro Morales Moreno se reserva el derecho de modificar cualquier tipo de información que pudiera aparecer en el sitio web, sin que exista obligación de preavisar o poner en conocimiento de los usuarios dichas obligaciones, entendiéndose como suficiente la publicación en el sitio web de Álvaro Morales Moreno.
            </p>
          </div>

          {/* DATOS IDENTIFICATIVOS */}
          <div>
            <h2>1. Datos identificativos</h2>
            <ul>
              <li><strong>Nombre de dominio:</strong> cisec.es</li>
              <li><strong>Nombre comercial:</strong> Álvaro Morales Moreno</li>
              <li><strong>Denominación social:</strong> Álvaro Morales Moreno</li>
              <li><strong>NIF:</strong> 53816084V</li>
              <li><strong>Domicilio social:</strong> Madrid</li>
              <li><strong>Teléfono:</strong> +34 670 994 340</li>
              <li><strong>E-mail:</strong> <a href="mailto:amorales@cisec.es">amorales@cisec.es</a></li>
            </ul>
          </div>

          {/* PROPIEDAD INTELECTUAL */}
          <div>
            <h2>2. Derechos de propiedad intelectual e industrial</h2>
            <p>
              El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición, compilación y demás elementos necesarios para su funcionamiento, los diseños, logotipos, texto y/o gráficos, son propiedad del RESPONSABLE o, si es el caso, dispone de licencia o autorización expresa por parte de los autores. Todos los contenidos del sitio web se encuentran debidamente protegidos por la normativa de propiedad intelectual e industrial, así como inscritos en los registros públicos correspondientes.
            </p>
            <p>
              Independientemente de la finalidad para la que fueran destinados, la reproducción total o parcial, uso, explotación, distribución y comercialización, requiere en todo caso la autorización escrita previa por parte del RESPONSABLE. Cualquier uso no autorizado previamente se considera un incumplimiento grave de los derechos de propiedad intelectual o industrial del autor.
            </p>
            <p>
              Los diseños, logotipos, texto y/o gráficos ajenos al RESPONSABLE y que pudieran aparecer en el sitio web, pertenecen a sus respectivos propietarios, siendo ellos mismos responsables de cualquier posible controversia que pudiera suscitarse respecto a los mismos. El RESPONSABLE autoriza expresamente a que terceros puedan redirigir directamente a los contenidos concretos del sitio web, y en todo caso redirigir al sitio web principal de cisec.es.
            </p>
            <p>
              Para realizar cualquier tipo de observación respecto a posibles incumplimientos de los derechos de propiedad intelectual o industrial, así como sobre cualquiera de los contenidos del sitio web, puede hacerlo a través del correo electrónico <a href="mailto:amorales@cisec.es">amorales@cisec.es</a>.
            </p>
          </div>

          {/* EXENCIÓN DE RESPONSABILIDADES */}
          <div>
            <h2>3. Exención de responsabilidades</h2>
            <p>
              El RESPONSABLE se exime de cualquier tipo de responsabilidad derivada de la información publicada en su sitio web siempre que no tenga conocimiento efectivo de que esta información haya sido manipulada o introducida por un tercero ajeno al mismo o, si lo tiene, haya actuado con diligencia para retirar los datos o hacer imposible el acceso a ellos.
            </p>
          </div>

          {/* USO DE COOKIES */}
          <div>
            <h2>Uso de Cookies</h2>
            <p>
              Este sitio web puede utilizar cookies técnicas (pequeños archivos de información que el servidor envía al ordenador de quien accede a la página) para llevar a cabo determinadas funciones que son consideradas imprescindibles para el correcto funcionamiento y visualización del sitio. Las cookies utilizadas tienen, en todo caso, carácter temporal, con la única finalidad de hacer más eficaz la navegación, y desaparecen al terminar la sesión del usuario. En ningún caso, estas cookies proporcionan por sí mismas datos de carácter personal y no se utilizarán para la recogida de los mismos.
            </p>
            <p>
              Mediante el uso de cookies también es posible que el servidor donde se encuentra la web reconozca el navegador utilizado por el usuario con la finalidad de que la navegación sea más sencilla, permitiendo, por ejemplo, el acceso de los usuarios que se hayan registrado previamente a las áreas, servicios, promociones o concursos reservados exclusivamente a ellos sin tener que registrarse en cada visita. También se pueden utilizar para medir la audiencia, parámetros de tráfico, controlar el progreso y número de entradas, etc., siendo en estos casos cookies prescindibles técnicamente, pero beneficiosas para el usuario. Este sitio web no instalará cookies prescindibles sin el consentimiento previo del usuario.
            </p>
            <p>
              El usuario tiene la posibilidad de configurar su navegador para ser alertado de la recepción de cookies y para impedir su instalación en su equipo. Por favor, consulte las instrucciones de su navegador para ampliar esta información.
            </p>

            <h3>Cookies que utilizamos</h3>
            <ul>
              <li><strong>Cookies técnicas:</strong> Necesarias para el funcionamiento del sitio (consentimiento de cookies). No requieren consentimiento.</li>
              <li><strong>Cookies analíticas (Google Analytics):</strong> Nos ayudan a entender cómo se usa el sitio para mejorar la experiencia. Requieren consentimiento.</li>
              <li><strong>Cookies de marketing (Google Ads):</strong> Permiten medir la efectividad de las campañas publicitarias. Requieren consentimiento.</li>
            </ul>

            <h3>Gestión de cookies</h3>
            <p>
              Puedes aceptar o rechazar las cookies mediante el banner que aparece al visitar el sitio por primera vez. También puedes configurar tu navegador para bloquear o eliminar cookies en cualquier momento.
            </p>
          </div>

          {/* POLÍTICA DE ENLACES */}
          <div>
            <h2>Política de enlaces</h2>
            <p>
              Desde el sitio web, es posible que se redirija a contenidos de terceros sitios web. Dado que el RESPONSABLE no puede controlar siempre los contenidos introducidos por terceros en sus respectivos sitios web, no asume ningún tipo de responsabilidad respecto a dichos contenidos. En todo caso, procederá a la retirada inmediata de cualquier contenido que pudiera contravenir la legislación nacional o internacional, la moral o el orden público, procediendo a la retirada inmediata de la redirección a dicho sitio web, poniendo en conocimiento de las autoridades competentes el contenido en cuestión.
            </p>
            <p>
              El RESPONSABLE no se hace responsable de la información y contenidos almacenados, a título enunciativo pero no limitativo, en foros, chats, generadores de blogs, comentarios, redes sociales o cualquier otro medio que permita a terceros publicar contenidos de forma independiente en la página web del RESPONSABLE. Sin embargo, y en cumplimiento de lo dispuesto en los artículos 11 y 16 de la LSSICE, se pone a disposición de todos los usuarios, autoridades y fuerzas de seguridad, colaborando de forma activa en la retirada o, en su caso, bloqueo de todos aquellos contenidos que puedan afectar o contravenir la legislación nacional o internacional, los derechos de terceros o la moral y el orden público.
            </p>
            <p>
              Este sitio web se ha revisado y probado para que funcione correctamente. En principio, puede garantizarse el correcto funcionamiento los 365 días del año, 24 horas al día. Sin embargo, el RESPONSABLE no descarta la posibilidad de que existan ciertos errores de programación, o que acontezcan causas de fuerza mayor, catástrofes naturales, huelgas o circunstancias semejantes que hagan imposible el acceso a la página web.
            </p>
          </div>

          {/* DIRECCIONES IP */}
          <div>
            <h2>Direcciones IP</h2>
            <p>
              Los servidores del sitio web podrán detectar de manera automática la dirección IP y el nombre de dominio utilizados por el usuario. Una dirección IP es un número asignado automáticamente a un ordenador cuando este se conecta a Internet. Toda esta información se registra en un fichero de actividad del servidor que permite el posterior procesamiento de los datos con el fin de obtener mediciones únicamente estadísticas que permitan conocer el número de impresiones de páginas, el número de visitas realizadas a los servidores web, el orden de visitas, el punto de acceso, etc.
            </p>
          </div>

          {/* LEY APLICABLE */}
          <div>
            <h2>4. Ley aplicable y jurisdicción</h2>
            <p>
              Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales del domicilio del USUARIO o el lugar del cumplimiento de la obligación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
