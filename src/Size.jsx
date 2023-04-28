import styled from 'styled-components' 
import './app.css'

const  SpanStyle = styled.span`
  padding: 5px;
  margin-right: 10px;
  cursor: pointer;
`
const SizeInput = styled.input`

  display: ${props => props.$show ? {display: 'hidden'} :{display: 'visible'}};

  
}
`

const Size = ({ name, span, type, handleChange }) => {

  return (
    <>
      <label htmlFor={name}>
        <SizeInput $show type={type} name={name} id={name} onChange={handleChange} />
        <SpanStyle>{span}</SpanStyle>
      </label>
    </>
  )
}

export const Color = ({ name, type, className, id, handleChange }) => {
  return (
    <>
      <label htmlFor={name}>
        <SizeInput type={type} name={name} id={id} onChange={handleChange}/>
        <SpanStyle className={className}></SpanStyle>
      </label>
    </>
  )
}

export default Size