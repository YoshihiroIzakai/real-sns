import React, { useRef } from 'react'
import './Register.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const email = useRef();
    const password = useRef();
    const passwordConfirmation = useRef();
    const username = useRef();

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        //パスワードと確認用のパスワードパスワードが合っているかどうかを確認
        if(password.current.value !== passwordConfirmation.current.value) {
            passwordConfirmation.current.setCustomValidity("パスワードが違います。");
        }else{
            try{
                const user = {
                    username: username.current.value,
                    email: email.current.value,
                    password: password.current.value,
                };
                //registerApiをたたく
                await axios.post("/auth/register", user)
                navigate("/login");
            }catch(err){
                console.log(err);
            }
        }
    };

  return (
    <div className="register">
        <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className="registerLogo">Real SNS</h3>
                <span className="registerDesc">本格的なSNSを、自分の手で。</span>
            </div>
            <div className="registerRight">
                <form className="registerBox" onSubmit={(e) => handleSubmit(e)}>
                    <p className="registerMsg">新規登録はこちら</p>
                    <input type="text" className="registerInput" placeholder="ユーザ名" required ref={username} />
                    <input type="email" className="registerInput" placeholder="Eメール" required ref={email}/>
                    <input type="password" className="registerInput" placeholder="パスワード" required minLength="6" ref={password}/>
                    <input type="password" className="registerInput" placeholder="確認用パスワード" required minLength="6" ref={passwordConfirmation} />
                    <button className="registerSignUp" type="submit">サインアップ</button>
                    <button className="registerLogin">ログイン</button>
                </form>
            </div>
        </div>
    </div>
  )
}
