
import { PermIdentityOutlined,  SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
    CartContainer,
    LogoContainer,
    MiddleContent,
    NavContainer,
    NavItems,
    NavMiddle,
    NavTop,
    Searchcontainer,
    WrapperMiddle,
    WrapperTop,
    Input
}
    from './Navbar.style'

const Navbar = () => {



    return (
        <>


                <NavTop>
                    <WrapperTop>
                    

                      <NavItems variant='white' >  
                      <Link className='link' to='/login'> Login </Link>
                      </NavItems> 

                        <NavItems variant='white'>
                            <Link className='link' to='/register'>Register </Link>
                            </NavItems>
                            
                        <NavItems variant='white'>
                        <Link className='link' to='/cart'>Shopping Cart </Link>
                        </NavItems> 

                        <NavItems variant='white'>
                            <Link className='link' to='/cart'>Checkout </Link>
                        </NavItems> 
                    </WrapperTop>
                </NavTop>


                <NavMiddle>
                    <WrapperMiddle>

                        <LogoContainer>  <Link to='/'> <img src="/mmm.svg" alt="" /> </Link></LogoContainer>
                        

                        <MiddleContent>

                        <NavItems variant='mainColor'>
                            <NavLink className='link' to='/'> Home </NavLink>
                                </NavItems>

                            <NavItems variant='mainColor'>
                            <NavLink className='link' to='/products'> Products </NavLink>
                                </NavItems>
                                
                            <NavItems variant='mainColor'>
                            <NavLink className='link' to='/repairlab'> RepairLab </NavLink>
                                </NavItems>

                            <NavItems variant='mainColor'>
                            <NavLink className='link' to='/about'> About </NavLink>
                                </NavItems>

                            <NavItems variant='mainColor'>
                            <NavLink className='link' to='/contact'> Contact </NavLink>
                                </NavItems>

                            <Searchcontainer>
                                <Input></Input>
                                <SearchOutlined style={{ color: 'rgb(203, 45, 65)' }} />
                            </Searchcontainer>

                          <Link className='mainlink' to='account'>  <PermIdentityOutlined style={{ fontSize: '28px' }} /> </Link>

                         <Link className='mainlink' to='cart' >  
                         <CartContainer> 
                                <ShoppingCartOutlined style={{ fontSize: '28px' }}
                                />
                                <span style={{ color: 'rgb(203, 45, 65)' }} >0.00 $</span>
                            </CartContainer>
                            </Link>

                        </MiddleContent>

                    </WrapperMiddle>

                </NavMiddle>





        </>



    )
}

export default Navbar