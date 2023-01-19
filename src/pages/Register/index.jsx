import React from 'react'
import { useState } from 'react'

import './register.css'
import axios from 'axios'

import { toast } from 'react-toastify'

import { Link } from 'react-router-dom'
import InputMask from "react-input-mask";




const Register = () => {

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [dataNasc, setDataNasc] = useState('')
  const [phone, setPhone] = useState('')



  function handleValidation(){
    if(fullName === ''|| email === ''  || cpf === '' || dataNasc === '' || phone === ''  ){
      toast.warn('Preencha os campos corretamente')
      return false
    }
    return true
  }


  function handleRegister(){
    if(handleValidation()){
      axios.post('https://backbarb-me-myauti.vercel.app/registerClient', {
        nomeCompleto: fullName,
        cpf,
        dataNasc,
        email,
        celular: phone,
        ultimoCorte: new Date()
      })
      .then(function (response) {
        console.log(response);
        toast.success('Cliente cadastrado')
        window.location.reload()
      })
      .catch(function (error) {
        console.error(error);
      });
    }
  }


  return (
    <div className="register">
      <div className="form-area">
        <div className="left">

          <div className="box-left">
            <h1 className='title'>Bem vindo <br /> de volta!</h1>
            <p className='subtitle'>Acesse a lista de clientes cadastrados</p>
           
            <Link   to='/' >
                <button className='button-1'>Entrar</button>
            </Link>
           
          </div>

        </div>

        <div className="right">
          <h2 className='title'>Cadastre o seu Cliente!</h2>

          <form>

            <label>
              <p>Nome Completo:</p>
              <input  onChange={(e) => setFullName(e.target.value)} type="text" name='nomeCompleto' placeholder="Fulano Da Silva" />
            </label>

            <label>
              <p>E-mail</p>
              <input onChange={(e) => setEmail(e.target.value)} type="email" name='email'  placeholder="fulano@gmail.com" />
            </label>

            <label>
              <p>CPF:</p>
              <InputMask name='cpf' onChange={(e) => setCpf(e.target.value)} mask="999.999.999-99"  placeholder="Digite o  CPF"/>
            </label>

            <label>
              <p>Celular:</p>
              <InputMask name='celular'  onChange={(e) => setPhone(e.target.value)} mask="(99)99999-9999"  placeholder="(67)999999999"/>
            </label>

            <label>
              <p> Data De Nascimento:</p>
              <input onChange={(e) => setDataNasc(e.target.value)} type="date" name='dataNasc'  placeholder="DD/MM/AAAA" />
            </label>

            <div className="button-area">
              <button onClick={handleRegister}  type="button" className='button-2'>Cadastrar</button>
            </div>



          </form>
        </div>
      </div>
    </div>
  )
}

export default Register