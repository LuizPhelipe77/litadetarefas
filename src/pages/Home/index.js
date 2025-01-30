import { useState } from "react";
import './home.css'

import { Link } from "react-router-dom";

import { auth } from '../../firebaseConecction'
import { signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";

function Home() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate();

  async function handleLogin(e){
    e.preventDefault(); //nao atualiza a pagina

    if(email !== '' && senha !== ''){
      
      await signInWithEmailAndPassword(auth, email, senha)
      .then(() => {
        //navegar para Admin
        navigate('/admin', {replace: true } )
      })
      .catch(() => {
        console.log('Erro ao fazer login')
      })

    }else{
      alert('preencha todos os campos')
    }

  }

     return (
      <div className="home-container">
        <h1>Tarefas</h1>
        <span> Gerenciar o dia a dia de forma facil</span>

        <form className="form" onSubmit={handleLogin}>
          <input 
            type="text"
            placeholder="Digite seu email ..."
            value={email}
            onChange={(e) => setEmail(e.target.value) }
          />

          <input 
            type="password"
            placeholder="*********"
            value={senha}
            onChange={(e) => setSenha(e.target.value) }
          />
          <button type="submit">Acessar</button>
        </form>

        <Link className="button-link" to='/register'>
          Não possui uma conta? Cadastre-se
        </Link>
      </div>
    );
  }
  
  export default Home;
  