import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import UsersTable from './UsersTable'
import InfoUser from './InfoUser'


const FormUser = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState();

    const [enviar, setEnviar] = useState(false)


    const onSubmit = (data, e) => {

        console.log(data)

        let categoriaUser;
        let edad = data.edad;

        if (edad > 0 && edad <= 12) {
            categoriaUser = "Niño";
        }
        else if (edad >= 12 && edad <= 30) {
            categoriaUser = "Joven"
        }
        else if (edad >= 31 && edad <= 50) {
            categoriaUser = "Adulto"
        }
        else {
            categoriaUser = "Mayor";
        }

        let info = {
            name: data.name,
            edad: data.edad,
            ocupacion: data.ocupacion,
            categoria: categoriaUser

        }

        setUser(info);
        setUsers([...users, info])
        setEnviar(true);
        e.target.reset();
    }

    //const { register, errors, handleSubmit } = useForm();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    return (
        <>
        <div className="container">
            <div className="col-md-10 col-lg-10 row">
                <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
                    <h1  className="py-5">Formulario de usuarios</h1>
                    <div className="row">
                        <div className="col-sm-6">
                            <label for="firstName" className="form-label">Nombre</label>
                            <input type="text" className="form-control" name="name" {...register('name', { required: true, maxLength: 20, })} />
                            <div className="py-3" >
                                {errors.name?.type === 'required' && "El campo nombre es requerido"}
                                {errors.name?.type === 'pattern' && "El nombre no debe contener caracteres especiales"}
                                {errors.name?.type === 'maxLength' && "El nombre no debe tener más de 20 caracteres"}
                            </div>
                        </div>
                        <div className="col-sm-6"  >
                            <label for="lastName" className="form-label">Edad</label>
                            <input type="number" className="form-control" {...register('edad', { required: true })} />
                            <div className="py-3">
                                {errors.name?.type === 'required' && "El campo nombre es requerido"}
                                {errors.name?.type === 'pattern' && "Solo deben ser numeros"}
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <label for="country" className="form-label">Ocupación</label>
                            <select className="form-select" name="ocupacion" {...register('ocupacion', { required: true, message: "Campo requerido" })}>
                                <option value="Estudiante">estudiante</option>
                                <option value="Empleado">empleado</option>
                                <option value="Jubilado">jubilado</option>
                            </select>
                            <div className="invalid-feedback">
                                Please select a valid country.
                            </div>
                        </div>

                        <hr className="my-4" />

                        <button className="btn btn-primary">Guardar</button>

                    </div>
                </form>
            </div>

            {enviar && <InfoUser userInfo={user} />}
            <UsersTable users= {users} />

        </div>



        
    </>
    )


}

export default FormUser;