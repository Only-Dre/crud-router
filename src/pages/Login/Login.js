// Página de Login
import React, {useState} from 'react';
import "./Login.css";

function Login({onLogin}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username, password);
    }

    return(
        <div className='login-container'>
            <form onSubmit={handleSubmit} className='login-form'>
                <h2>Agenda de Contatos</h2>
                <p>Faça login para continuar</p>
                <input 
                type="text" 
                placeholder='Usuário (admin)' 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}/>

                <input 
                type="password" 
                placeholder='Senha (123)' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}/>

                <button type='submit'>Entrar</button>
            </form>
        </div>
    );

}export default Login;