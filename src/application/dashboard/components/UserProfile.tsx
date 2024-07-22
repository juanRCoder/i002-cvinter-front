

const UserProfile: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F2F2F2]">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full mx-4">
                <div className="flex flex-col items-center">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Profile"
                        className="w-32 h-32 rounded-full mb-4"
                    />
                    <h2 className="text-2xl font-bold text-[#060215]">Nombre del Usuario</h2>
                    <h3 className="text-xl text-[#94B9FF]">Título Profesional</h3>
                    <p className="text-center text-[#060215] mt-4 mb-6">
                        Esta es una breve descripción del usuario. Aquí se pueden incluir detalles sobre sus habilidades, experiencia y otros aspectos relevantes.
                    </p>
                </div>
                <div className="bg-[#F8F8F8] p-4 rounded-lg shadow-inner w-full">
                    <h4 className="text-lg font-semibold text-[#060215] mb-2">Datos de Contacto</h4>
                    <p className="text-[#060215]"><strong>Email:</strong> usuario@example.com</p>
                    <p className="text-[#060215]"><strong>GitHub:</strong> github.com/usuario</p>
                    <p className="text-[#060215]"><strong>Teléfono:</strong> +123456789</p>
                    <button className="mt-4 px-6 py-2 bg-[#CDFFD8] text-[#060215] rounded-lg shadow-md hover:bg-[#95BE9E]">
                        Descargar CV
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserProfile