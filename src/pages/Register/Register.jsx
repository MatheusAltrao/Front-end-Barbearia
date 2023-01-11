import React from 'react'
import { useState } from 'react'
import './register.css'

const Register = () => {

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [dataNasc, setDataNasc] = useState('')


  return (
    <div className="register">
      <div className="form-area">
        <div className="left">

          <div className="box-left">
            <h1 className='title'>Bem vindo <br /> de volta!</h1>
            <p className='subtitle'>Acesse a sua conta agora mesmo.</p>
            <button className='button-1'>Entrar</button>
          </div>

        </div>

        <div className="right">
          <h2 className='title'>Cadastre o seu Cliente!</h2>

          <form>
            <label>
              <p>Nome Completo:</p>
              <input onChange={(e) => setFullName(e.target.value)} type="text" name='nomeCompleto' />
            </label>

            <label>
              <p>E-mail</p>
              <input onChange={(e) => setEmail(e.target.value)} type="email" name='email' />
            </label>

            <label>
              <p>CPF:</p>
              <input onChange={(e) => setCpf(e.target.value)} type="number" name='cpf' />
            </label>


            <label>
              <p> Data De Nascimento:</p>
              <input onChange={(e) => setDataNasc(e.target.value)} type="date" name='dataNasc' />
            </label>

            <div className="button-area">
              <button className='button-2'>Cadastrar</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Register