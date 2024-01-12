import { useState } from 'react';
import Formulario from './components/Formulario.jsx';
import Header from './components/Header.jsx';
import ListadoPacientes from './components/ListadoPacientes.jsx';


function App() {
  
  const [pacientes, setPacientes] = useState([]);

  

  return (
    <div className='container mx-auto mt-5'> 
      <Header/>

      <div className='mt-12 md:flex'>
        <Formulario 
          pacientes = {pacientes}
          setPacientes = {setPacientes}          
        />
        <ListadoPacientes/>
      </div>

    </div>
  )
}

export default App
