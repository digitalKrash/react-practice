import React from 'react';
import logoImg from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Register({ onAddUser }) {
  const [inputName, setInputName] = React.useState('')
  const [inputEmail, setInputEmail] = React.useState('')
  const [inputPhone, setInputPhone] = React.useState(null)
  const [inputPassword, setInputPassword] = React.useState('')



  const handleAddUser = () => {
    if (!inputName || !inputEmail || !inputPhone || !inputPassword) {
      alert('Введите данные')
      return
    }

    axios
      .post('http://localhost:3001/users', {
        name: inputName,
        email: inputEmail,
        phone: inputPhone,
        password: inputPassword
      })
      .then(({ data }) => {
        console.log(data)
        const userObj = { ...data }
        onAddUser(userObj)
        alert('Пользователь зарегестрирован')
      })
  }
  


  return (
    <section className="register">

      <div className='register__header'>
        <Link to="/">
          <img src={logoImg} alt="ITL" />
        </Link>
      </div>
      <div className="register__form">
        <h3 className="register__form-title">
          Регистрация
        </h3>
        <p className="regёister__form-text">У вас уже есть аккаунт? <a href="">Войдите в систему</a></p>

        <div className="input">
          <label>Имя</label>
          <input value={inputName} onChange={e => setInputName(e.target.value)} />
        </div>
        <div className="input">
          <label>Электронная почта</label>
          <input value={inputEmail} onChange={e => setInputEmail(e.target.value)} />
        </div>
        <div className="input">
          <label>Номер мобильного телефона</label>
          <input value={inputPhone} onChange={e => setInputPhone(e.target.value)} />
        </div>
        <div className="input">
          <label>Пароль</label>
          <input value={inputPassword} onChange={e => setInputPassword(e.target.value)} />
        </div>

        <button className="btn" onClick={handleAddUser}>Зарегистрироваться</button>

        <p className="register__form-descr">Нажимая на кнопку, вы соглашаетесь с условиями <a href="">Оферты и лицензионного договора</a> и <a href="">Политикой обработки персональных данных.</a></p>
      </div>

    </section>
  )
}

export default Register;