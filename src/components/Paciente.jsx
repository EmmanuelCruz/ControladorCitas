import React from 'react'

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  return (
    <div className='mb-10 m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
            Nombre: {' '}
            <span className=' font-normal normal-case'>
                { paciente.nombre }
            </span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>
            Propietario: {' '}
            <span className=' font-normal normal-case'>
                { paciente.propietario }
            </span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>
            Email: {' '}
            <span className=' font-normal normal-case'>
                { paciente.email }
            </span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>
            Fecha de alta: {' '}
            <span className=' font-normal normal-case'>
                { paciente.alta }
            </span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>
            Síntomas: {' '}
            <span className=' font-normal normal-case'>
                { paciente.sintomas }
            </span>
        </p>

        <div className='flex justify-between'>
            <div>
                <button onClick={() => setPaciente(paciente)} className='py-2 px-5 bg-indigo-600 font-bold uppercase rounded-md text-white hover:bg-indigo-700' type='button'>
                    Editar
                </button>
            </div>

            <div>
                <button onClick={() => eliminarPaciente(paciente.id)} className='py-2 px-5 bg-red-600 font-bold uppercase rounded-md text-white hover:bg-red-700' type='button'>
                    Eliminar
                </button>
            </div>
        </div>

    </div>
  )
}

export default Paciente
