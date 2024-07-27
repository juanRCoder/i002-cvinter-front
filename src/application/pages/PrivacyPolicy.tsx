import Footer from "../dashboard/components/Footer"
import Navbar from "./NavBar"

function PrivacyPolicy() {
  const textos = {
    text1: 'El presente Política de Privacidad establece los términos en que Cvinter usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.',
    text2: 'Nuestro sitio web podrá recoger información personal por ejemplo: Nombre,  información de contacto como  su dirección de correo electrónica e información demográfica. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.',
    text3: 'Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios.  Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.',
    text4: 'Cvinter está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.'
  }
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen border-t border-blue-2">
        <section className="flex-1 max-w-6xl mx-5 m-auto text-zinc-700 mt-10 text-lg">
          {[
            ['POLÍTICA DE PRIVACIDAD', textos.text1],
            ['Información que es recogida', textos.text2],
            ['Uso de la información recogida', textos.text3],
            ['Reports', textos.text4],
          ].map(([title, text], i) => (
            <div key={i}>
              <h1 className="text-blue-2 text-2xl py-3">{title}</h1>
              <p>{text}</p>
            </div>
          ))}
          <div className="text-zinc-700 text-lg mt-5 mb-12">
            <p className="py-1">Cvinter Se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.</p>
            <p className="py-1">Esta politica de privacidad se han generado en politicadeprivacidadplantilla.com</p>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default PrivacyPolicy