import Form from "./Form"
import './app.css'
import styled from 'styled-components'

const DetailStyle = styled.div`
  flex-basis: 53%;
  background: #fff;
  color: #777;
  padding: 40px;
  padding-left: 60px;
  box-shadow: -10px 5px 10px 10px rgba(0,0,0,0.1)
  font-size: 13px;
  font-weight: 500;

`
const Header = styled.h1`
  color: #333;
  font-size: 35px;
`

const Header2 = styled.h2`
  color: #555;s
  font-size: 30px;
  font-weight: 600;
`
const Header3 = styled.h3`
  color: #00d874;
  margin-bottom;
`

const Detail = () => {
  return (
    <DetailStyle>
      <Header>Casual T shirt</Header>
      <Header2>$15.00</Header2>
      <Header3>30% OFF</Header3>
      <p>Wrangler is an American manufacter of jeans and other clothing items
         particularly Workwear</p>
      <Form />
    </DetailStyle>
  )
}

export default Detail