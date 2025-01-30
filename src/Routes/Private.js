import { useState, useEffect } from "react";

import { auth } from "../firebaseConecction";
import { onAuthStateChanged } from "firebase/auth";

import { Navigate } from "react-router-dom";

function Private({ children }){
    const [loading, setLoading] = useState(true);
    const [signed, setSigned] = useState(false);

    useEffect(() => {
        async function checkLogin(){
            const unsub = onAuthStateChanged(auth, (user) => {
                // se tem user logado
                if(user){
                    const userData = {
                        uid: user.uid,
                        email: user.email,
                    }

                    setLoading(false);
                    setSigned(true)
                } else{
                    //não possui user logado
                    setLoading(false);
                    setSigned(false)
                }
            })
        }

        checkLogin();
    }, [])

    if(loading){
        return(
            <div></div>
        )
    }
    // se não estiver logado rediciona para a Home
    if(!signed){
        return <Navigate to='/' />
    }
    // se estiver logado retorna o 'Children' = é oq tem dentro da teg o componente Admin
    return children;
}

export default Private;