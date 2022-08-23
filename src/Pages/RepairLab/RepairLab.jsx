import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Table from '../../Components/Table/Table'
import Footer from '../../Components/Footer/Footer'
import { MainContainer, Title } from '../../global.styles'
import styled from 'styled-components'


const Heading = styled.div`

display: flex;
flex-direction: column;
align-items: center;
margin-top: 50px;

`

const TableContainer= styled.div`

margin-top: 30px;
width: 100%;
display: flex;
justify-content: center;

`



const RepairLab = () => {
  return (
    <div>
      <Navbar/>
      
      <Heading>
        <Title>Repair <span>Lab</span></Title>
        <p>Track your mobile repair status here</p>
        </Heading>

        <TableContainer>
        <Table/>
        </TableContainer>

        <Footer/>

    </div>
  )
}

export default RepairLab