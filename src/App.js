import React, {useState} from 'react';
import { BrowserRouter as Router, Routers, Route, Navigate } from 'react-router-dom';

// Importando Páginas
import Login from "./pages/Login/Login";

// Importando NavBar - Main Menu
import NavBar from './components/NavBar/NavBar';

function App(){
  // Estado Global simplificado de login e contatos
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [contacts, setContacts] = useState([]);

  // Função de Login
  const handleLogin = (username, password) => {
    if (username === "admin" && password === "123"){
      setIsAuthenticated(true)
    }else{
      alert("Usuário ou senha inválidos!");
    }
  };

  // Função de Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

}export default App;