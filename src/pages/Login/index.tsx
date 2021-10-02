import React, { FormEvent } from 'react';

const handleSubmit = (e: FormEvent) =>{
    e.preventDefault();
    console.log("Datos ingresados")
}

const Login = () =>{
    return(
        <form action="" onSubmit = {handleSubmit}>
        <div>
            <label htmlFor="email">Email</label>
            <input required id="email" type="text" name="email" />
        </div>
        <div>
            <label htmlFor="password">Contraseña</label>
            <input required id="password" type="password" name="pass" />
        </div>
        <button type="submit">Enviar</button>
    </form>
    )
}

export default Login