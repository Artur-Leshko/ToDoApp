import React, { useState } from 'react';
import './userForm.css';

function validateForm({ login, password, passwordConfirmation }) {
  let error_array = [];

  if(login === '') {
    error_array.push('Введите логин');
  }

  if(password !== passwordConfirmation) {
    error_array.push('Пароли не совпадают');
  }

  if(password.length < 6) {
    error_array.push('Пароль слишком короткий');
  }

  return error_array;
}

export const Register = ({ onRegister }) => {
    const [login, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState([]);

    return (
      <form className='box' method='post' onSubmit={(e) => e.preventDefault()}>
          <h1>Регистрация</h1>
          <input type='text' name='e-mail' placeholder='E-mail' value={login} onChange={(e) => setEmail(e.target.value)} />
          <input type='password' name='password' placeholder='Пароль' value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type='password' name='passwordConfirmation' placeholder='Повторите пароль' value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
          {error.length !== 0 ? error.map(e => (
            <>
              <span className='passwords-error'>{e}</span>
              <br />
            </>
          )) : null}
          <button type='submit' onClick={() => {
              setError(validateForm({ login, password, passwordConfirmation }));
              if(error.length === 0) {
                onRegister({ login, password });
              }
          }}>
            Зарегистрироваться
          </button>
      </form>
    )
}
