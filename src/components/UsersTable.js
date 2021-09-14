import React from 'react'



const UsersTable = ({ users }) => {

    console.log(users   )

    return (

        <>
            <div classname="col-md-10 col-lg-10 row">
                <h1 className="py-5">Tabla de Usuarios</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Edad</th>
                            <th scope="col">Ocupacion</th>
                            <th scope="col">Categorizacion</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map(user => {

                            return (
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{user.name}</td>
                                    <td>{user.edad}</td>
                                    <td>{user.ocupacion}</td>
                                    <td>{user.categoria}</td>
                                </tr>
                            )

                        })}


                    </tbody>
                </table>
            </div>
        </>



    );

}

export default UsersTable;