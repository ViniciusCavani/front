import React, { useState } from 'react';
import logo from '../assets/logoNegative 1.png'
import logo2 from '../assets/logoPosColor 1.png'
import background from '../assets/fundo-tela-login.png'

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [showPass, setShowPass] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simples validação de usuário (pode ser substituída por lógica de autenticação real)
    if (username === 'admin' && password === 'admin') {
      setLoggedIn(true);
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  const handlePass = () => {
    setShowPass(!showPass)
  }

  return (
    <div style={{ display: "flex", height: "100%"}}>
      <div className='div-image-login'>
        <img src={logo} style={{position: "absolute"}} />
        <img src={background}  style={{maxWidth: "100%", maxHeight: "100%", minWidth: "100%",minHeight: "100%", objectFit: "cover"}} />
        <div className='filter-img'></div>
      </div>
      <div style={{ width: "65%", display: "flex", justifyContent: "center", alignItems:"center" }}>
        <form onSubmit={handleSubmit}>
          <img src={logo2} className='logo-login'/>
          <h4 style={{ fontWeight: "900" }}>Acesse o Painel de Monitoramento</h4>
          <div className='form-group'>
          <p style={{ marginBottom: "1px"}}>Usuário</p>
            <input
              style={{ width: "100%" }}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <p style={{ marginBottom: "1px"}}>Senha</p>
            <input
              style={{ width: "100%" }}
              id="password"
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" className='btn-show-pass' onClick={() => handlePass()}>
              {showPass ?  "Ocultar" : "Mostrar"}
            </button>
          </div>
          <button type="submit" className='btn-login'>Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
