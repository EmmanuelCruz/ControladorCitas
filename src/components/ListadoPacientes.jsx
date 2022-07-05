import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = () => {
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

        <div className='md:h-screen h-screen overflow-y-scroll'>
            <Paciente />
            <Paciente />
            <Paciente />
            <Paciente />
            <Paciente />
            <Paciente />
            <Paciente />
        </div>

    </div>
  )
}

export default ListadoPacientes
