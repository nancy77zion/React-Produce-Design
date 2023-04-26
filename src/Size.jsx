import styled from 'styled-components' 
import './app.css'

const  SpanStyle = styled.span`
  padding: 5px;
  margin-right: 10px;
  cursor: pointer;
`
const SizeInput = styled.input`
  display: none;
`

const Size = ({ name, span, type, }) => {

  return (
    <>
      <label htmlFor={name}>
        <SizeInput type={type} name={name} id={name} />
        <SpanStyle>{span}</SpanStyle>
      </label>
    </>
  )
}

export const Color = ({ name, type,className, id }) => {
  return (
    <>
      <label htmlFor={name}>
        <input type={type} name={name} id={id} />
        <SpanStyle className={className}></SpanStyle>
      </label>
    </>
  )
}

export default Size