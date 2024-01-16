const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombre, rut, telefono, email, sintomas, control, id} = paciente

    const handlerEliminar = () => {
        const respuesta = confirm('¿Realmente deseas eliminar el paciente?')

        if(respuesta){
            eliminarPaciente(id)
        }  
    }
 
    return (
        <section className="bg-white mt-2 mx-8 rounded-md shadow-md px-5 py-8">
            <p className="font-semibold text-purple-700 uppercase"> Nombre:
                <span className="text-black font-normal normal-case"> {nombre}</span>
            </p>
            <p className="font-semibold text-purple-700 uppercase"> RUT:
                <span className="text-black font-normal normal-case"> {rut}</span>
            </p>
            <p className="font-semibold text-purple-700 uppercase"> N°:
                <span className="text-black font-normal normal-case"> {telefono}</span>
            </p>
            <p className="font-semibold text-purple-700 uppercase"> Email:
                <span className="text-black font-normal normal-case"> {email}</span>
            </p>
            <p className="font-semibold text-purple-700 uppercase"> Signos y Síntomas:
                <span className="text-black font-normal normal-case text-justify">
                {sintomas}
                </span>
            </p>
            <p className="font-semibold text-purple-700 uppercase"> Próximo Control:
                <span className="text-black font-normal normal-case"> {control}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button 
                type="button"
                className="py-2 px-10 bg-purple-500 rounded-lg text-white font-semibold"
                onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>

                <button 
                type="button"
                className="py-2 px-10 bg-red-500 rounded-lg text-white font-semibold"
                onClick={handlerEliminar}
                >
                    Eliminar
                </button>
            </div>
        </section>
    )
}

export default Paciente