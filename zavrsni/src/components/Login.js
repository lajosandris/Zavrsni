import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = (props) =>{
    const [usernameText, setUsernameText] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        props.onLogin(usernameText);
        navigate("/");        
    }
    
    return (
      
    <div className="container">
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="title">
                <h1>TRENUTNO NEMA ZASTOJA U PROMETU</h1>
            </label>
            <input 
            id="title"
            type="text" 
            placeholder="Unesite vaše ime i prezime" 
            required 
            value={usernameText} 
            onChange={(e)=> setUsernameText(e.target.value)}/>
            <button className="login-btn">Prijavite se</button>
        </form>
    </div>)
}

export default Login;