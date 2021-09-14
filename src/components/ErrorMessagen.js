import React, {useState} from 'react'

const MessageError = ({type}) => {

    let typenew= type.toString();

    console.log(typenew)

    const [message, setMessage]=useState("");

    if(typenew=="required"){
        console.log("ingreso")
        setMessage("El campo es obligatorio")
    }
    else if(typenew=="pattern"){
        setMessage("El campo solo debe contener texto")
    }
    else if(typenew=="maxLength"){
        setMessage("El campo no debe ser mayor a 20")

    }


    return (<p>Mensaje: {message} </p>)


}

export default MessageError;