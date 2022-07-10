import React from 'react'
import tw from 'twin.macro'
import Login from './Login.tsx'

const Wrapper = tw.main`
  flex flex-col items-center justify-center py-16
`

const Container = tw.div`
    w-9/12  
`

const Main: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Login />
      </Container>
    </Wrapper>
  )
}

export default Main