import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './userForm.css';

export const Login = ({ onLogin }) => {
    const [login, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    return (
      <form className='box' method='post' onSubmit={(e) => e.preventDefault()}>
          <h1>Логин</h1>
          <input type='text' name='e-mail' placeholder='E-mail' value={login} onChange={(e) => setEmail(e.target.value)} />
          <input type='password' name='password' placeholder='Пароль' value={password} onChange={(e) => setPassword(e.target.value)} />
          {error !== '' && <span className='passwords-error'>{error}</span>}
          <button type='submit' onClick={() => {
            setError('');
            try {
              onLogin({ login, password });
            } catch (e) {
              setError('Неверный логин или пароль!');
            }
          }}>
            Войти
          </button>
          <Link to='/register'>Регистрация</Link>
      </form>
    )
}
