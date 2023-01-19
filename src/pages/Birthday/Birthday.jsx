import {React,useState} from 'react'

import './birthday.css'

import moment from "moment";

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

import { AiOutlineArrowLeft } from 'react-icons/ai'

import { Link } from 'react-router-dom'



const Birthday = () => {

 let date = moment(new Date()).format('DD/MM/YYYY')

  return (
    <div className="home">
      <div className="home-area">
        <header className='home-header'>

        <div className="icon">
            <Link to='/'>
            <AiOutlineArrowLeft className='back' />
            </Link> 
        </div>

          
        <div className="box-title-area">
          <h2 className='title'>Lista dos Aniversariantes</h2>
          <p>{date}</p>
        </div>

        </header>

        <ChakraProvider>
          <TableContainer minHeight={200} >
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>Nome Completo</Th>
                  <Th>Email</Th>
                  <Th>CPF</Th>
                  <Th>Data De Nascimento</Th>
                  <Th>Telefone</Th>
                  <Th>Último corte</Th>
                 
                </Tr>
              </Thead>
    <Tbody>
      <Tr>
        <Td>Nome Completo</Td>
        <Td>Email </Td>
        <Td>CPF</Td>
        <Td>Data De Nascimento</Td>
        <Td>Telefone </Td>
        <Td>Último corte</Td>
      </Tr>
     
    </Tbody>

  </Table>
</TableContainer>

</ChakraProvider>

      </div>
    </div>
  )
}

export default Birthday