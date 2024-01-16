import { useState, useEffect } from 'react';
import Error from './Error.jsx';


const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
    /* ---------------------------------- useState's ---------------------------------------- */
    const [nombre, setNombre] = useState('');
    const [rut, setRut] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [control, setControl] = useState('');
    
    useEffect(() => {
        if(Object.keys(paciente).length > 0) { //comprueba si un objeto está vacío o no
            setNombre(paciente.nombre)
            setRut(paciente.rut)
            setTelefono(paciente.telefono)
            setEmail(paciente.email)
            setSintomas(paciente.sintomas)
            setControl(paciente.control)
        } 
    },[paciente])

   

    const generarId = () =>{
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return random + fecha;

    }

    const [error, setError] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();

        //Validación de formulario

        if([nombre, rut, telefono, email, sintomas, control].includes('')){
            
            console.log('No se rellenaron todos los campos')
            console.log('No se pueden enviar los datos')
            setError(true)
            return;

        } 

        setError(false)

        //Objeto de paciente.

        const objetoPaciente = {

            nombre,
            rut,
            telefono,
            email,
            sintomas,
            control,    

        }

        if(paciente.id) {
            //editando el registro
            objetoPaciente.id = paciente.id

            const pacientesActualizado = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

            setPacientes(pacientesActualizado)
            setPaciente({})
        } else {
            //nuevo registro
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }

        
        //Reiniciar el formulario -------------------------------

        setNombre('');
        setRut('');
        setTelefono('');
        setEmail('');
        setSintomas('');
        setControl('');     
    }

  return (
    <section className="md:w-1/2 lg:w-2/5 m-10">
        <h2 className="font-black text-2xl text-center">
            
            Seguimiento Pacientes
        
        </h2>

        <p className="font-bold text-lg mt-3 text-center">
            
            Añade a tus pacientes y {''} 
            <span className="text-purple-700 "> Administralos </span>

        </p>

        <form onSubmit={handleSubmit} className="bg-white shadow-md mt-2 rounded-md py-1 px-3 mb-10">                     
            <div>
                <label htmlFor="paciente" className="block ml-3 text-gray-700 uppercase font-bold my-3"> Nombre del Paciente</label>

                <input
                    id="paciente"
                    type='text'  
                    placeholder="Nombre del Paciente"
                    value={nombre}
                    onChange={(e) => {
                        console.log('Escribiendo...', e.target.value);
                        setNombre(e.target.value);
                    }}
                    
                    className=" mt-1 border-2 rounded-md placeholder:px-1 placeholder:font-semibold  placeholder-violet-300 py-3 w-full"         
                />
            </div>
            <div>
                <label htmlFor="rut" className="block ml-3 text-gray-700 uppercase font-bold my-3"> RUT del Paciente</label>

                <input
                    id="rut"
                    type='text'  
                    placeholder="xx.xxx.xxx-x"
                    value={rut}
                    onChange={(e) => setRut(e.target.value)}
                    
                    className=" mt-1 border-2 rounded-md placeholder:px-1 placeholder:font-semibold  placeholder-violet-300 py-3 w-full"         
                />
            </div>
            <div>
                <label htmlFor="telefono" className="block ml-3 text-gray-700 uppercase font-bold my-3"> N° telefónico</label>

                <input
                    id="telefono"
                    type='text'  
                    placeholder="+56 912345678"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    className=" mt-1 border-2 rounded-md placeholder:px-1 placeholder:font-semibold  placeholder-violet-300 py-3 w-full"         
                />
            </div>
            <div>
                <label htmlFor="correo" className="block ml-3 text-gray-700 uppercase font-bold my-3"> Correo del Paciente</label>

                <input
                    id="correo"
                    type='email'  
                    placeholder="ejemplo@ejemplo.cl"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className=" mt-1 border-2 rounded-md placeholder:px-1 placeholder:font-semibold  placeholder-violet-300 py-3 w-full"         
                />
            </div>
            <div>
                <label htmlFor="control" className="block ml-3 text-gray-700 uppercase font-bold my-3"> Signos y síntomas</label>

                <textarea 
                id="sintomas"
                value={sintomas}
                onChange={(e) => setSintomas(e.target.value)}
                className=" mt-1 border-2 rounded-md placeholder:px-1 placeholder:font-semibold  placeholder-violet-300 py-3 w-full"         
                placeholder="Se pesquizan los siguientes síntomas..."
                />
            </div>
            <div>
                <label htmlFor="control" className="block ml-3 text-gray-700 uppercase font-bold my-3"> Próximo control</label>

                <input
                    id="control"
                    value={control}
                    type="date"
                    onChange={(e) => setControl(e.target.value)}
                    className=" mt-1 border-2 rounded-md placeholder:px-1 placeholder:font-semibold  placeholder-violet-300 py-3 w-full"         
                />
            </div>

            { error && 
                <Error> 
                    <h1> Hola </h1>
                    <p>¡ No rellenaste todos los campos !</p>
                </Error>}
            
            <input 
            type="submit" 
            className="text-white bg-purple-500 hover:bg-purple-700 border-2 rounded-md mt-3 mb-5 p-1 w-full font-black uppercase cursor-pointer transition-all" 
            value={paciente.id ? "Editar Paciente": "Agregar Paciente"}
            >
            </input>            
        </form>
    </section>  
  )
}

export default Formulario

