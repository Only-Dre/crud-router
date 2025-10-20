import { React, useState } from "react";
import "./Lista.css";

function Lista({ contacts, setContacts }) {
  // Inicializando contatos, edição vazios e telefone
  const [editingId, setEditingId] = useState("");
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const [handleSave] = (id) => {
    setContacts(

    )
  };

  return (
    <div className="lista-container">
      <h2>Lista de Contatos</h2>
      {contacts.length === 0 ? (
        <p>Nenhum contato cadastrado</p>
      ) : (
        // SENÃO
        // Função de apresentação de Lista
        <ul> 
           {/* Mapeia os elementos cadastrados, verificando e definindo uma chave;
           Se o editingID for igual ao contact.id, ele já vai renderizar os campos de input, assim carregando o novo nome e telefone
           Caso não seja igual, executa um 'span' mostrando o nome, telefone e então apresenta o botão de editar ou deletar*/}
          {contacts.map((contact) => (
            <li key={contacts.id}>
              {editingId === contact.id ? (
                // Div não estilizado
                <>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                  />

                  <input
                    type="text"
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                  />

                  <button onClick={() => handleSave(contact.id)}>Salvar</button>
                </>
              ) : (
                <>
                  <span>
                    {contact.name} - {contact.phone}
                  </span>
                  <button onClick={() => handleEdit(contact)}>Editar Contato</button>
                  <button onClick={() => handleDelet(contact)}>Excluir Contato</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Lista;
