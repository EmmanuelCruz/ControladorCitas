import Paciente from './Paciente'

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
    
    return (
        <div className='md:w-1/2 lg:w-3/5'>
            <h2 className='font-black text-3xl text-center'>
                Listado de pacientes
            </h2>

            <p className=' text-lg mt-5 text-center'>
                Administra tus pacientes y {' '}
                <span className=' text-indigo-600 font-bold '>
                    citas
                </span>
            </p>

            {
                pacientes && pacientes.length ? 
                (
                    <div className='md:h-screen h-screen overflow-y-scroll'>
                        {
                            pacientes.map(paciente => (
                                <Paciente eliminarPaciente={eliminarPaciente} key={paciente.id} paciente={paciente} setPaciente={setPaciente}/>
                            ))
                        }
                    </div>
                ) :
                (
                    <div>
                        <p className='text-center font-bold text-3xl text-red-600 mt-3'>
                            No hay pacientes
                        </p>
                    </div>
                )
            }

            

        </div>
    )
}

export default ListadoPacientes
