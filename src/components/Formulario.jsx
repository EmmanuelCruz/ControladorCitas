import React from 'react'
import { useState, useEffect } from 'react'
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setAlta(paciente.alta)
            setSintomas(paciente.sintomas)
        }
    }, [paciente]);

    const gerarID = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);
        return random + fecha;
    }

    const handleSubmit = (e) => {
        // Validacion de formulario
        e.preventDefault();
        if([nombre, propietario, email, alta, sintomas].includes('')){
            setError(true);
            return;
        }
        setError(false);

        // Objeto de paciente
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            alta,
            sintomas,
            id: gerarID()
        }

        if(paciente.id){
            // Editando registro
            objetoPaciente.id = paciente.id;
            const pacientesActualizados = pacientes.map(pacienteActual => pacienteActual.id === paciente.id ? objetoPaciente : pacienteActual);
            setPacientes(pacientesActualizados);
            setPaciente({});
        } else {
            // Agregando nuevo registro
            objetoPaciente.id = gerarID();
            setPacientes([...pacientes, objetoPaciente]);
        }

        // Limpia de valores
        setNombre('');
        setPropietario('');
        setEmail('');
        setAlta('');
        setSintomas('');
    }

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

            <form onSubmit={handleSubmit} className=' bg-white shadow-md rounded-lg py-10 px-5 mb-10 mt-5' action="">
                <div className=' mb-5'>
                    <label htmlFor="mascota" className='block text-gray-700 uppercase'>Nombre Mascota</label>
                    <input value={nombre} onChange={(e) => setNombre(e.target.value)} id="mascota" type="text" className=' border-2 w-full placeholder-gray-400 font-bold' placeholder='Ingresa el nombre de la mascota' />
                </div>

                <div className=' mb-5'>
                    <label htmlFor="propietario" className='block text-gray-700 uppercase'>Nombre propietario</label>
                    <input value={propietario} onChange={(e) => setPropietario(e.target.value)} id="propietario" type="text" className=' border-2 w-full placeholder-gray-400 font-bold' placeholder='Ingresa el nombre del propietario' />
                </div>

                <div className=' mb-5'>
                    <label htmlFor="email" className='block text-gray-700 uppercase'>Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" className=' border-2 w-full placeholder-gray-400 font-bold' placeholder='Ingresa el email' />
                </div>

                <div className=' mb-5'>
                    <label htmlFor="alta" className='block text-gray-700 uppercase'>Alta</label>
                    <input value={alta} onChange={(e) => setAlta(e.target.value)} id="alta" type="date" className=' border-2 w-full placeholder-gray-400 font-bold' />
                </div>

                <div className=' mb-5'>
                    <label htmlFor="sintomas" className='block text-gray-700 uppercase'>Síntomas</label>
                    <textarea value={sintomas} onChange={(e) => setSintomas(e.target.value)} id="sintomas" cols="30" rows="10" className=' border-2 w-full placeholder-gray-400 font-bold' placeholder='Describe los síntomas'></textarea>
                </div>

                <input type="submit" className='mb-3 w-full p-3 text-white font-bold bg-indigo-600 hover:bg-indigo-700 cursor-pointer transition-all' value={ paciente.id ? "Editar paciente" : "Agregar paciente"}/>
                
                {
                    error && 
                    <Error mensaje='Todos los campos son obligatorios' />
                }
            </form>
        </div>
    )
}

export default Formulario
