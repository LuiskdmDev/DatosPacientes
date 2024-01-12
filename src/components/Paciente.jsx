const Paciente = () => {
    return (
        <div className="bg-white mt-2 mx-8 rounded-md shadow-md px-5 py-8">
            <p className="font-semibold text-purple-700 uppercase"> Nombre:
                <span className="text-black font-normal normal-case"> Ernesto Perez</span>
            </p>
            <p className="font-semibold text-purple-700 uppercase"> RUT:
                <span className="text-black font-normal normal-case"> 12.345.678-9</span>
            </p>
            <p className="font-semibold text-purple-700 uppercase"> N°:
                <span className="text-black font-normal normal-case"> +56912345678</span>
            </p>
            <p className="font-semibold text-purple-700 uppercase"> Email:
                <span className="text-black font-normal normal-case"> Ernesto.Perez@ejemplo.cl</span>
            </p>
            <p className="font-semibold text-purple-700 uppercase"> Signos y Síntomas:
                <span className="text-black font-normal normal-case text-justify" style={{ textAlign: 'justify' }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque similique at omnis quaerat delectus tempore recusandae impedit, ea ex ipsa! Eos veritatis illum rerum saepe iste, in maxime dolores voluptatum? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac vestibulum velit. Praesent vel aliquam justo, et maximus quam. Sed fermentum urna id ante ullamcorper tincidunt. Sed nec erat odio.
                </span>
            </p>
            <p className="font-semibold text-purple-700 uppercase"> Próximo Control:
                <span className="text-black font-normal normal-case"> 01/02/24</span>
            </p>
        </div>
    )
}

export default Paciente