const Paciente = ({paciente}) => {

    const {nombre, rut, telefono, email, sintomas, control} = paciente
    return (
        <div className="bg-white mt-2 mx-8 rounded-md shadow-md px-5 py-8">
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
                <span className="text-black font-normal normal-case text-justify" style={{ textAlign: 'justify' }}>
                {sintomas}
                </span>
            </p>
            <p className="font-semibold text-purple-700 uppercase"> Próximo Control:
                <span className="text-black font-normal normal-case"> {control}</span>
            </p>
        </div>
    )
}

export default Paciente