import React from 'react'
import { Button, MainContainer, Title } from '../../global.styles'
import { ImgContainer, SaleContainer, SaleLeft, SaleRight } from './SaleCard.style'

const SaleCard = () => {
  return (
    <MainContainer>
        <SaleContainer>
          <SaleLeft>
            <h1 style={{color:'crimson', fontSize:'45px'}}>Sale!</h1>
            <h3>Check all amaizing products on Sale</h3>
            <Button>Buy Now</Button>
          </SaleLeft>

          <SaleRight>
            <ImgContainer>
            <img src="/sale2.png" alt="" />
            </ImgContainer>
          </SaleRight>
        </SaleContainer>
    </MainContainer>
  )
}

export default SaleCard