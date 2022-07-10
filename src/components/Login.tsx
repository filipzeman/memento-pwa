import React from 'react'
import tw from 'twin.macro'

const Section = tw.section`
    text-gray-600
`

const Container = tw.div`
    container px-5 py-24 mx-auto flex flex-wrap justify-center items-center
`

const Submit = tw.button`
    text-white bg-purple-600 border-0 py-2 px-8 focus:outline-none hover:bg-purple-700 rounded text-lg
`
const FormWrapper = tw.div`
    w-4/12 bg-gray-200 rounded-lg p-10 flex flex-col
`

const FormGroup = tw.div`
    relative mb-6
`

const Input = tw.input`
    w-full bg-white rounded border border-gray-300 focus:border-purple-600 focus:ring-4 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out
`

const Label = tw.label`
    flex mb-2 leading-7 text-base text-gray-600 font-medium   
`

const Login:React.FC =() => {
  return (
    <Section>
  <Container>
	<FormWrapper>
	  <FormGroup>
		<Label htmlFor="email">E-mail</Label>
		<Input type="email" id="email" name="email"/>
	  </FormGroup>
	  <FormGroup>
		<Label htmlFor="password">Password</Label>
		<Input type="password" id="password" name="password" />
	  </FormGroup>
	  <Submit>Submit</Submit>
	</FormWrapper>
  </Container>
</Section>
  )
}

export default Login