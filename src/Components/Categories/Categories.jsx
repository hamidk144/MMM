import { Headset, SmartphoneOutlined } from '@material-ui/icons'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { MainContainer, Title } from '../../global.styles'
import { CategoriesContainer, CategoryBox, CategoryBoxMain, AdContainer, Adcard } from './Categories.style'
import './Categories.css'






const Categories = () => {
  const navigate= useNavigate()

const handleCategoryNav = (link)=>{

  navigate(link);
}

  return (
    <MainContainer>
      <Title>Categories</Title>

      <CategoriesContainer>
        
        <CategoryBoxMain onClick={()=>handleCategoryNav("/repairlab")}> 
          <NavLink className='c-navlink' to='/repairlab'> 
        <SmartphoneOutlined className='categories_icons' /> 
         Repair Lab 
         </NavLink>
        </CategoryBoxMain>

        <CategoryBox onClick={()=>handleCategoryNav("/products/mobilePhones")}> 
        <NavLink className='c-navlink navlinkc2' to='/products/mobilePhones'>
          <SmartphoneOutlined className='categories_icons' /> 
           Mobile Phones</NavLink> 
           </CategoryBox>

        <CategoryBox onClick={()=>handleCategoryNav("/products/mobileAcc")}> 
        <NavLink className='c-navlink navlinkc2' to='/products/mobileAcc'>
          <Headset className='categories_icons' /> 
         Mobile Accessories
         </NavLink>
         </CategoryBox>


        <CategoryBox onClick={()=>handleCategoryNav("/products/repairAcc")} >
          <NavLink id='repairAcc-link' className='c-navlink navlinkc2' to='/products/repairAcc'>
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