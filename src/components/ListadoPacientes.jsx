import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  
  return (
    <section className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

        {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-2xl text-center"> Listado de Pacientes</h2>

          <p className="font-bold text-lg mt-3 text-center">
            Administra tus {''}
            <span className="text-purple-700 "> pacientes y citas</span>
          </p>

          {pacientes.map (paciente => (       
              <Paciente
              key ={paciente.id}            
              paciente={paciente}
              setPaciente = {setPaciente}
              eliminarPaciente = {eliminarPaciente}
              />          
          ))}
        </>
        ): (
          <> 
            <h2 className="font-black text-2xl text-center"> No hay Pacientes</h2>

          <p className="font-bold text-lg mt-3 text-center">
            Agrega pacientes para que los{''}
            <span className="text-purple-700 "> gestiones!</span>
          </p>
          
          </>
        )}

        
        
    </section>
  )
}

export default ListadoPacientes