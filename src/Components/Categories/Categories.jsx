import { Headset, SmartphoneOutlined } from '@material-ui/icons'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { MainContainer, Title } from '../../global.styles'
import { CategoriesContainer, CategoryBox, CategoryBoxMain, AdContainer, Adcard } from './Categories.style'
import './Categories.css'






const Categories = () => {
  return (
    <MainContainer>
      <Title>Categories</Title>

      <CategoriesContainer>
        
        <CategoryBoxMain> 
          <NavLink className='c-navlink' to='/repairlab'> 
        <SmartphoneOutlined className='categories_icons' /> 
         Repair Lab 
         </NavLink>
        </CategoryBoxMain>

        <CategoryBox> 
        <NavLink className='c-navlink navlinkc2' to='/products/mobilephones'>
          <SmartphoneOutlined className='categories_icons' /> 
           Mobile Phones</NavLink> 
           </CategoryBox>

        <CategoryBox> 
        <NavLink className='c-navlink navlinkc2' to='/products/mobileAcc'>
          <Headset className='categories_icons' /> 
         Mobile Accessories
         </NavLink>
         </CategoryBox>

        <CategoryBox>
          <NavLink className='c-navlink navlinkc2' to='/repairAcc'>
           <SmartphoneOutlined className='categories_icons' /> 
         Repair Accessories
         </NavLink>
         </CategoryBox>

      </CategoriesContainer>

      <AdContainer>

        <Adcard color='rgb(231, 56, 91)' > Quality Work</Adcard>
        <Adcard color='rgb(42, 93, 181)' >Money Back Guarantee</Adcard>
        <Adcard color='#474747;'>24/7 Availablity</Adcard>


      </AdContainer>
    </MainContainer>
  )
}

export default Categories