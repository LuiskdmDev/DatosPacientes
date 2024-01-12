
const Error = ({children}) => {
    //children es una palabra reservada en react y hace referencia a todo lo que le pases a un componente
    return (

        <div className='mt-3 ml-2 font-bold  bg-pink-200 rounded py-1 px-2 uppercase text-center'>
            {children} 
        </div>

    )
}

export default Error