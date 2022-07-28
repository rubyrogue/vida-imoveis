import {Redirect} from 'react-router';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import React, {useEffect, useState} from 'react';
import auth from '../../../data/Adm/firebaseConfg';
import {DefaultButton} from '../../../GlobalStyles';
import {toast, ToastContainer} from 'react-toastify';

const Container = styled.div`
    display: flex; 
    width: 100vw;
    height: 100vh - 20px;
    padding: 4rem calc((100vw - 1450px) / 2);
`;

const LoginArea = styled.div`
    background-color: #FFF;
    padding: 30px;
    max-width: 500px;
    max-height: 50%;
    margin: auto;
    margin-top: 20px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #CCC;

    h1{
        font-size: 24px;
        margin-bottom: 10vh;
    }

    .form--input{
        text-align: left;

        label{
            display: block;
        }

        input{
            margin-bottom: 20px;
            padding: 10px;
            font-size: 16px;
            outline: none;
            border: 1px solid #CCC;
            border-radius: 5px;
            width: 100%;
            transition: 0.3s;

            &:hover{
                border: 1px solid #7D2AE8;
            }
        }
    }

    .footer-login{
        font-size: 13px;

        a{
            font-weight: bold;
            margin-left: 5px;
        }
    }

`;

const Login = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [email, setEmail]         = useState("");
    const [password, setPassword]   = useState("");
    const [user, setUser]           = useState("");

    let history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user){
                setLoggedIn(true);
                return setUser(user);
            }else{
                setUser('');
                setLoggedIn(false);
            }
        })
    }, [isLoggedIn, user])

    const userLogin = ({email, password}) => {
        auth.signInWithEmailAndPassword(email, password)
            .then(res=>{
                setUser(res.user); 
                setLoggedIn(true);
            })
            .catch((err) => {
                if(err.code === "auth/wrong-password"){
                    toast.error("Senha incorreta!");
                    return false;
                }else if(err.code === "auth/user-not-found"){
                    toast.error("Email incorreto!");
                }
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!email || !password){
            toast.error("Digite os dois campos necessários");
        }else{
            userLogin(email, password);
            setEmail("");
            setPassword("");
        }

        const data = {
            email, password
        };
        console.log(`Credenciais de login ${JSON.stringify(data)}`)
        
        let res = userLogin(data)

        return res;        
    }

    return (
        <>
            <Container>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
                <LoginArea>
                    <form>
                        <h1>Faça o login de administrador</h1>

                        <div className="form--input">
                            <label>Usuário</label>
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        <div className="form--input">
                            <label>Senha</label>
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        </div>
                        <DefaultButton onClick={handleSubmit} secondary='true'> 
                            Entrar 
                            {isLoggedIn ? (<Redirect to='/administrador/imoveis'/>) : (<Redirect to='/administrador'/>)} 
                        </DefaultButton>                   
                    </form>
                </LoginArea>
            </Container>
        </>
    )
}

export default Login;
