import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css";


// Importando Home
import Home from "./pages/Home/Home";

// Importando Páginas
import Login from "./pages/Login/Login";

// Importando NavBar - Main Menu
import NavBar from './components/NavBar/NavBar';

// Importando Lista
import Lista from './pages/Lista/Lista';

// Importando Cadastro
import Cadastro from './pages/Cadastro/Cadastro';

function App(){
  // Estado Global simplificado de login e Contatos
  // Autenticação começa por 'false', por padrão
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [contacts, setContacts] = useState([]);

  // Função de Login
  // "chamaLogin" pelo user e senha
  // Verifica se o username E a password sejam as mesmas do código
  // admin - 123
  const handleLogin = (username, password) => {
    if (username === "admin" && password === "123"){
      // Caso sejam iguais, transforma em true e prossegue o login
      setIsAuthenticated(true)
    }else{
      // Caso contrário, nega o código
      alert("Usuário ou senha inválidos!");
    }
  };

  // Função de Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return(
    // Criando as Rotas de páginas
    <Router>
      {/* Caso esteja logado, executa o Logout, caso NÃO ESTEJA, não executa o Logout */}
      {isAuthenticated && <NavBar onLogout={handleLogout}/>}
      <Routes>
        {/* Especificação de Links/Rotas de acesso da NavBar */}
        
        <Route // Rota de Login
        path='/Login'
        element = {
          isAuthenticated ? <Navigate to="/"/> : <Login onLogin={handleLogin}/>}
        />

        <Route
        path='/'
        element = {
          isAuthenticated ? <Home/> : <Navigate to="/Login"/>
        }
        />

        <Route // Tela de Cadastro
        path='/cadastro'
        element = { // Caso esteja autenticado, confirma o contacts
          isAuthenticated ?
            <Cadastro contacts={contacts} setContacts={setContacts}/>
            : // CASO NÃO ESTEJA, retorna à tela de Login
            (<Navigate to="/Login"/>)
        }        
        />

        <Route // Lista de Contatos
        path='/lista'
        element = {
          isAuthenticated ?
          // Situações
            (<Lista contacts={contacts} setContacts={setContacts}/>)
            :
            (<Navigate to="/Login"/>)
        }
        />

        <Route
        path='*' // Caso o caminho seja igual à qualquer outra coisa
        element = {<Navigate to="/Login"/>}
        />

      </Routes>
    </Router>
  )
};
export default App;