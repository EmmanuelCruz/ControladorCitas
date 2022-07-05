import React from 'react'
import { useState, use } from 'react'

const Formulario = () => {
  return (
    <div className=' md:w-1/2 lg:w-2/5'>
        <h2 className='font-black text-3xl text-center'>
            Seguimiento pacientes
        </h2>

        <p className=' text-lg mt-5 text-center'>
            Añade pacientes y {' '}
            <span className=' text-indigo-600 font-bold '>
                Administralos
            </span>
        </p>

        <form className=' bg-white shadow-md rounded-lg py-10 px-5 mb-10 mt-5' action="">
            <div className=' mb-5'>
                <label htmlFor="mascota" className='block text-gray-700 uppercase'>Nombre Mascota</label>
                <input id="mascota" type="text" className=' border-2 w-full placeholder-gray-400 font-bold' placeholder='Ingresa el nombre de la mascota' />
            </div>

            <div className=' mb-5'>
                <label htmlFor="propietario" className='block text-gray-700 uppercase'>Nombre propietario</label>
                <input id="propietario" type="text" className=' border-2 w-full placeholder-gray-400 font-bold' placeholder='Ingresa el nombre del propietario' />
            </div>

            <div className=' mb-5'>
                <label htmlFor="email" className='block text-gray-700 uppercase'>Email</label>
                <input id="email" type="email" className=' border-2 w-full placeholder-gray-400 font-bold' placeholder='Ingresa el email' />
            </div>

            <div className=' mb-5'>
                <label htmlFor="alta" className='block text-gray-700 uppercase'>Alta</label>
                <input id="alta" type="date" className=' border-2 w-full placeholder-gray-400 font-bold' />
            </div>

            <div className=' mb-5'>
                <label htmlFor="sintomas" className='block text-gray-700 uppercase'>Síntomas</label>
                <textarea id="sintomas" cols="30" rows="10" className=' border-2 w-full placeholder-gray-400 font-bold' placeholder='Describe los síntomas'></textarea>
            </div>

            <input type="submit" className=' w-full p-3 text-white font-bold bg-indigo-600 hover:bg-indigo-700 cursor-pointer transition-all' value="Agregar paciente"/>
        </form>
    </div>
  )
}

export default Formulario
