
import styled from 'styled-components'

const ProductPics = styled.div`
  flex-basis: 47%;
  background: #241e20;
  transform: scale(1.08);
  box-shadow: -10px 5px 10px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`
const ControlBtn = styled.div`
  position: absolute;
  bottom: 40px;
  right: 20px;
`
const Btn = styled.span.attrs(() => ({tabIdex: 0}))`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  margin: 10px;
  cursor: pointer;

  &.active {
    background: blue;
  }
`
const Img = styled.img`
  width: 100%;
  display: block;
`

const Product = () => {
  return (
    <ProductPics>
      <Img src={'./images/image1.png'}
          id='pic-one'
          alt='image one'
           />
        <ControlBtn>
          <Btn className=' active'></Btn>
          <Btn className='btn'></Btn>
          <Btn className='btn'></Btn>
        </ControlBtn>
    </ProductPics>
  )
}

export default Product