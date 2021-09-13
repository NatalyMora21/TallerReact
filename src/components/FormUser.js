import React, {useState} from 'react'
import { useForm } from 'react-hook-form';


const FormUser = () => {

    const [usuario, setUsuario]= useState([]);

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data,e) => {
        setUsuario([...usuario,data])
        e.target.reset();
    }

    return (

        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nombre</label>
            <input type="text" name="name" {...register('name', { required: true, message: "Campo requerido" })} />
            <span className="text-danger text-small d-block mb-2">
                {errors?.name?.message}
            </span>

            <label>Edad</label>
            <input type="text" name="edad" {...register('edad', { required: true, message: "Campo requerido" })} />
            <span className="text-danger text-small d-block mb-2">
                {errors?.username?.message}
            </span>

            <label>Ocupación</label>
            <select {...register('ocupacion', { required: true, message: "Campo requerido" })} name="ocupacion">
                <option value="10">estudiante</option>
                <option value="20">empleado</option>
                <option value="30">jubilado</option>
            </select>
            <span className="text-danger text-small d-block mb-2">
                {errors?.username?.message}
            </span>

            <button>Add new user</button>
        </form>

        {usuario.map(user => <p> {user.name}</p>)}
        </>

    )

}

export default FormUser;