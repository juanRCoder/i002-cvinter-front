import { Link } from "react-router-dom"
import Footer from "../dashboard/components/Footer"
import Navbar from "./NavBar"

function PrivacyCookies() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen border-t border-blue-2">
        <section className="flex-1 max-w-6xl mx-5 m-auto text-zinc-700 my-10 text-lg">
          <h1 className="text-center text-4xl text-blue-2">POLÍTICA DE COOKIES</h1>
          <h2 className="text-center text-xl text-blue-500 underline py-2"><Link to={'/'}>Cvinter-app</Link></h2>
          <p className="py-4">
            El acceso a este Sitio Web puede implicar la utilización de cookies. Las cookies son pequeñas cantidades de información que se almacenan en el navegador utilizado por cada Usuario —en los distintos dispositivos que pueda utilizar para navegar— para que el servidor recuerde cierta información que posteriormente y únicamente el servidor que la implementó leerá. Las cookies facilitan la navegación, la hacen más amigable, y no dañan el dispositivo de navegación.
          </p>
          <p className="py-4">
            Las cookies son procedimientos automáticos de recogida de información relativa a las preferencias determinadas por el Usuario durante su visita al Sitio Web con el fin de reconocerlo como Usuario, y personalizar su experiencia y el uso del Sitio Web, y pueden también, por ejemplo, ayudar a identificar y resolver errores.
          </p>
          <p className="py-4">
            Las cookies que permiten identificar a una persona se consideran datos personales. Por tanto, a las mismas les será de aplicación la Política de Privacidad anteriormente descrita. En este sentido, para la utilización de las mismas será necesario el consentimiento del Usuario. Este consentimiento será comunicado, en base a una elección auténtica, ofrecido mediante una decisión afirmativa y positiva, antes del tratamiento inicial, removible y documentado.
          </p>
          <h1 className="text-3xl text-blue-2 py-6">Cookies propias</h1>
          <p>
            Son aquellas cookies que son enviadas al ordenador o dispositivo del Usuario y gestionadas exclusivamente por Cvinter para el mejor funcionamiento del Sitio Web. La información que se recaba se emplea para mejorar la calidad del Sitio Web y su Contenido y su experiencia como Usuario. Estas cookies permiten reconocer al Usuario como visitante recurrente del Sitio Web y adaptar el contenido para ofrecerle contenidos que se ajusten a sus preferencias.
          </p>
          <h1 className="text-3xl text-blue-2 py-6">Cookies de redes sociales</h1>
          <div className="mb-6">
            {[
              ['Facebook', 'https://www.facebook.com/policies/cookies/'],
              ['Twitter', 'https://twitter.com/es/privacy'],
              ['Instagram', 'https://help.instagram.com/1896641480634370?ref=ig'],
              ['YouTube', 'https://policies.google.com/privacy?hl=es-419&gl=mx'],
              ['Pinterest', 'https://policy.pinterest.com/es/privacy-policy'],
              ['LinkedIn', 'https://www.linkedin.com/legal/cookie-policy?trk=hp-cookies'],
            ].map(([title, link]) => (
              <div key={title} className="flex">
                <p className="w-24">{title}:</p><a className="text-blue-500 underline" href={link}>{link}</a>
              </div>
            ))}
          </div>
          <h1 className="text-3xl text-blue-2 py-6">Deshabilitar, rechazar y eliminar cookies</h1>
          <p className="py-4">
            El Usuario puede deshabilitar, rechazar y eliminar las cookies —total o parcialmente— instaladas en su dispositivo mediante la configuración de su navegador (entre los que se encuentran, por ejemplo, Chrome, Firefox, Safari, Explorer). En este sentido, los procedimientos para rechazar y eliminar las cookies pueden diferir de un navegador de Internet a otro. En consecuencia, el Usuario debe acudir a las instrucciones facilitadas por el propio navegador de Internet que esté utilizando. En el supuesto de que rechace el uso de cookies —total o parcialmente— podrá seguir usando el Sitio Web, si bien podrá tener limitada la utilización de algunas de las prestaciones del mismo.
          </p>
          <p className="py-4">
            Este documento de Política de Cookies ha sido creado mediante el generador de plantilla de política de cookies web gratis online el día 23/07/2024.
          </p>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default PrivacyCookies