import { useState } from "react";

import { Link, replace } from "react-router-dom";
import { auth} from '../../firebaseConecction'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  async function handleRegister(e){
    e.preventDefault(); //nao atualiza a pagina

    if(email !== '' && senha !== ''){

      await createUserWithEmailAndPassword(auth, email, senha)
      .then(() => {
        navigate('/admin', {replace: true} )
      })
      .catch(() => {
        console.log('erro ao fazer cadastro')
      })

    }else{
      alert('preencha todos os campos')
    }

  }

     return (
      <div className="home-container">
        <h1>Cadastre-se</h1>
        <span>Vamos criar sua conta</span>

        <form className="form" onSubmit={handleRegister}>
          <input 
            type="text"
            placeholder="digite seu email..."
            value={email}
            onChange={(e) => setEmail(e.target.value) }
          />

          <input 
            type="password"
            placeholder="*********"
            value={senha}
            onChange={(e) => setSenha(e.target.value) }
          />
          <button type="submit">Cadastrar</button>
        </form>

        <Link className="button-link" to='/register'>
         já possui conta? Faça login!
        </Link>
      </div>
    );
  }
  
  export default Register;
  