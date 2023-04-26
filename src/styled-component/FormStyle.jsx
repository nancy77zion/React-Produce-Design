
import styled from 'styled-components'

export const SizeSelect = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  `

export const Button = styled.button`
background: #553ff0;
color: #fff;
font-size: 17px;
width: 100%;
padding: 10px;
border-radius: 30px;
border: 0;
outline: 0;
margin-top: 50px;
box-shadow: 0 10px 10px rgba(85, 63, 240, 0.25);
cursor: pointer;
`
export const ColorSelect = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px
`
export const Para = styled.p`
  width: ${props => props.$width ? '75px' : '70px'};
`
export const FormStyle = styled.form`
  font-size: 15px;
  font-weight: 400;
`
export const InputStyle = styled.input`
  background: #eee;
  border: 0;
  outline: 0;
  padding: 2px 2px 2px 15px;
  width: 50px;
  border-radius: 20px;
`