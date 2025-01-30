import './admin.css'
import { useState } from 'react';

import {auth} from '../../firebaseConecction'
import { signOut } from 'firebase/auth';


function Admin(){
    const [tarefaInput, setTarefaInput] = useState('')

    function handleRegister(e){
        e.preventDefault();
    }

    async function handleLogout(){
        await signOut(auth);
    }

    return(
        <div className='admin-container'>
            <h1>Minhas tarefas</h1>

            <form className='form' onSubmit={handleRegister}>
                <textarea 
                    placeholder='Digite sua tarefa'
                    value={tarefaInput}
                    onChange={(e) => setTarefaInput(e.target.value) }
                />

                <button className='btn-register' type='submit'>Registrar tarefa</button>
            </form>

            <article className='list'>
                <p>fdsfgsgfg</p>
                <div>
                    <button>Editar</button>
                    <button className='delete'>Excluir</button>
                </div>
            </article>

            <button className='btn-logout' onClick={handleLogout}>Sair</button>
        </div>
    )
}

export default Admin;