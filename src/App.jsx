
import Product from './Product'
import Detail from './Detail'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #d0eaff;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ProductContainer = styled.div`
  width: 90%;
  height: ;
  max-width: 750px;
  display: flex;
`

function App() {

  return (
    <Container>
      <ProductContainer>
        <Product />
        <Detail />
      </ProductContainer>
    </Container>
  )
}

export default App
