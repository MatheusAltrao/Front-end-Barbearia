import React from 'react'
import './home.css'
import { ChakraProvider } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box, Flex
} from '@chakra-ui/react'



import { AiFillDelete } from 'react-icons/ai'
import { SlPencil } from 'react-icons/sl'

const Home = () => {
  return (
    <div className="home">
      <div className="home-area">
        <header className='home-header'>
          <h2 className='title'>Lista dos clientes</h2>
          <p className='subtitle' >Lorem ipsum em ipsum dolor sit amet consectetur em ipsum dolor sit amet consectetur dolor sit amet consectetur </p>
        </header>

        <ChakraProvider>

          <TableContainer minHeight={200} maxWidth={900}>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>Nome Completo</Th>
                  <Th>Email</Th>
                  <Th>CPF</Th>
                  <Th>Data De Nascimento</Th>
                  <Th>Ações</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Roberto Silva</Td>
                  <Td>roberto@gmail.com</Td>
                  <Td>123123123</Td>
                  <Td>01/01/2000</Td>
                  <Th h={100} display="flex" alignItems="center" gap={3}>
                    <AiFillDelete color='#ff0000' className='icon' />
                    <SlPencil color='#f2cb2b' className='icon' />
                  </Th>
                </Tr>

                <Tr>
                  <Td>Pedro Almeida</Td>
                  <Td>pedro@gmail.com</Td>
                  <Td>123123123</Td>
                  <Td>02/10/1995</Td>
                  <Th h={100} display="flex" alignItems="center" gap={3}>
                    <AiFillDelete color='#ff0000' className='icon' />
                    <SlPencil color='#f2cb2b' className='icon' />
                  </Th>
                </Tr>
                <Tr>
                  <Td>Rafael Souza</Td>
                  <Td>rafael@gmail.com</Td>
                  <Td>123123123</Td>
                  <Td>30/01/2002</Td>
                  <Th h={100} display="flex" alignItems="center" gap={3}>
                    <AiFillDelete color='#ff0000' className='icon' />
                    <SlPencil color='#f2cb2b' className='icon' />
                  </Th>
                </Tr>
              </Tbody>

            </Table>
          </TableContainer>
        </ChakraProvider>
      </div>
    </div>

  )
}

export default Home