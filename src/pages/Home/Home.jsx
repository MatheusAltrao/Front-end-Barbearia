import React, { useState, useEffect } from 'react'
import moment from "moment";
import './home.css'
import { toast } from 'react-toastify'
import { ChakraProvider } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

import axios from 'axios'

import { AiFillDelete } from 'react-icons/ai'
import { HiPencil } from 'react-icons/hi'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { HiOutlineCake } from 'react-icons/hi'
import { FaCircle} from 'react-icons/fa'

import { Link } from 'react-router-dom'


const Home = () => {

  const [data, setData] = useState('')
  
  useEffect(() => {
    axios.get('https://backbarb-me-myauti.vercel.app/getClients').then((res) => {
      console.log(data)
      setData(res.data)
    }).catch((err) => {
      setData(err)
    })
  }, [])

  
  useEffect(()=>{
    if(data){
      data.map((item)=>{
        let todaysDate = new Date('01-31-2003')
        let customDate = `${todaysDate.getDate()}/${todaysDate.getMonth()+1}`
        let userBirthday = new Date(item.dataNasc)
        let customUserBirthday = `${userBirthday.getDate()+1}/${userBirthday.getMonth()+1}`
        if(customDate == customUserBirthday){
          toast.success(`${item.nomeCompleto} faz aniversário hoje!`)
        }
      })
    }
      
  }, [data])

  function deleteClient(id) {
    axios.post('https://backbarb-me-myauti.vercel.app/deleteClient', {
      id
    }).then((res) => {
      window.location.reload()
    }).catch((err) => {
      console.log(err)
    })
  }

  var date = ''
  var newHaircut = ''
  var today = new Date()
  var difference = ''
  var days = ''

  function updateLastHaircut(id){
    axios.post('https://backbarb-me-myauti.vercel.app/updateLastHaircut', {
      id,
      ultimoCorte: new Date()
    }).then((res) => {
      window.location.reload()
    }).catch((err) => {
      console.log(err)
    })
  }


  return (
    <div className="home">
      <div className="home-area">
        <header className='home-header'>

          <div className="icon">
            <Link to='/register'>
              <AiOutlineArrowLeft className='back' />
            </Link>
          </div>


          <div className="home-title-area">
            <h2 className='title'>Lista dos clientes</h2>
          </div>

          <div className="birthday-icon">
            <Link to='/Birthday'>
              
            </Link>
          </div>


        </header>
        <ChakraProvider>
          <TableContainer overflow={"auto"}  minHeight={200} w={1200} m="0 auto">
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>Nome Completo</Th>
                  <Th>Email</Th>
                  <Th>CPF</Th>
                  <Th>Data De Nascimento</Th>
                  <Th>Telefone</Th>
                  <Th>Último corte</Th>
                  <Th>Ações</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  !data ? <Tr></Tr> : data.map(client => (
                    <Tr key={client._id}>
                      <Td>{client.nomeCompleto}</Td>
                      <Td>{client.email}</Td>
                      <Td>{client.cpf}</Td>
                      <Td>
                        {
                          date = moment(new Date(client.dataNasc)).add(1,'days').format('DD/MM/YYYY')
                        }
                      </Td>
                      <Td>{client.celular}</Td>
                      <Td>
                        {
                          newHaircut = moment(new Date(client.ultimoCorte)).format('DD/MM/YYYY')
                        }
                      </Td>
                      <Td h={100} display="flex" alignItems="center" gap={3}>
                        <AiFillDelete onClick={() => deleteClient(client._id)} className='icon red icon-home ' />
                        <BsCheckLg className='icon green icon-home' onClick={() => updateLastHaircut(client._id)}/>
                      </Td>
                      <Td style={{display: 'none'}}>
                        {
                          days = moment.duration(moment(today, "DD/MM/YYYY HH:mm:ss").diff(moment(newHaircut, "DD/MM/YYYY HH:mm:ss"))).asDays().toFixed()
                        }
                      </Td>
                      <Td>
                        {
                          days < 15 ? <FaCircle color='green' /> : <p></p>
                        }
                        {
                          days >= 15 && days <= 30 ? <FaCircle color='yellow' /> : <p></p>
                        }
                        {
                          days >= 30 ? <FaCircle color='red' /> : <p></p>
                        }
                      </Td>
                    </Tr>
                  ))
                }
              </Tbody>
            </Table>
          </TableContainer>
        </ChakraProvider>
      </div>
    </div>
  )
}

export default Home