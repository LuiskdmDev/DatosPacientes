import Paciente from "./Paciente"

const ListadoPacientes = () => {
  return (
    <section className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        <h2 className="font-black text-2xl text-center"> Listado de Pacientes</h2>

        <p className="font-bold text-lg mt-3 text-center">
          Administra tus {''}
          <span className="text-purple-700 "> pacientes y citas</span>
        </p>
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />


    </section>
  )
}

export default ListadoPacientes