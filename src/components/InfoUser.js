import React, { useState, useEffect} from 'react'

const arrayvaloresedad = {
    nino: ["Generosidad", "Alegría"],
    joven: ["Colaboración", "Responsabilidad"],
    adulto: ["Humildad", "Honestidad"],
    mayor: ["Gratitud", "Compromiso"]
}

const arrayOcupacion = {
    estudiante: ["Sinceridad", "Empatía"],
    empleado: ["Confianza", "Paciencia"],
    jubilado: ["Compresión", "Solidaridad"]
}

const InfoUser = ({userInfo}) => {

    console.log(userInfo,"info")


    let [user, setUser] = useState(userInfo);
    let [valoresOcupacion, setValoresOcupacion] = useState([]);
    let [valoresEdad, setValoresEdad] = useState([]);
    //Validar ocupacion

    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        if (userInfo.ocupacion=="Estudiante") {
            setValoresOcupacion(arrayOcupacion.estudiante)
        }
        else if(userInfo.ocupacion=="Empleado") {
            setValoresOcupacion(arrayOcupacion.empleado)
        }
        
        else if(userInfo.ocupacion=="Jubilado"){
            setValoresOcupacion(arrayOcupacion.jubilado)
    
        }
    
        //Validar edad
    
        if (userInfo.categoria == "Niño") {
            setValoresEdad(arrayvaloresedad.nino)
        }
        else if(userInfo.categoria == "Joven") {
            setValoresEdad(arrayvaloresedad.joven)
        }
        else if(userInfo.categoria == "Adulto") {
            setValoresEdad(arrayvaloresedad.adulto)
        }
        else{
            setValoresEdad(arrayvaloresedad.mayor)
        }
    
      }, {});



    return (
        <>
        <div className="col-md-10 col-lg-10 row">
            <hr className="my-4" />
            <div class="alert alert-secondary" role="alert">

                A la/él {user.categoria} de {user.name} de {user.edad} años , le recomendamos tener presente 
                  
                {valoresOcupacion.map (valor => <em>{" "+valor} , </em>)}
                {valoresEdad.map (valor => <em>{valor} , </em>)}
                para obtener un buen resultado como  {user.ocupacion}

             </div>
        </div>


        </>
        );
    



}

export default InfoUser;