import React from 'react'
import tw from 'twin.macro'

const Navigation = tw.header`
    flex justify-center text-white bg-gray-800
`
const Container = tw.div`
    flex justify-between flex-col md:flex-row w-8/12 p-3 text-gray-600
`
const LinkWrapper = tw.div`
    md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap flex-col md:flex-row items-center text-base justify-center
`

const Login = tw.button`
    inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0
`
const Logo = tw.h1`
    md:mr-20 block text-xl font-bold uppercase items-center text-white mb-4 md:mb-0
`

const NavLink = tw.a`
    md:mr-6  font-medium items-center text-white hover:underline mb-4 md:mb-0
`

const Header: React.FC = () => {
  return (
    <Navigation>
        <Container>
            <LinkWrapper>
                <Logo >Memento</Logo>   
    	        <NavLink href="/">First Link</NavLink>
    	        <NavLink href="/">Second Link</NavLink>
                <NavLink href="/">Third Link</NavLink>
            </LinkWrapper>
            <Login>
        	    Login
            </Login>
        </Container>
    </Navigation>
  )
}

export default Header