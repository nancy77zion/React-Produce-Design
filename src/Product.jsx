import { useState } from 'react'
import styled from 'styled-components'

const ProductPics = styled.div`
  flex-basis: 47%;
  background: #241e20;
  transform: scale(1.0);
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
    //background: blue;
  }
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`

const Product = () => {

  const [imgSrc, setImgSrc] = useState("/images/image1.png");
  const [btn, setBtn] = useState()
  
  const handleButtonClick = (newImgSrc) => {
    setImgSrc(newImgSrc);
  };

  return (
    <ProductPics>
      <Img src={imgSrc}
          id='pic-one'
          alt='product-image'
           />
        <ControlBtn>
          <Btn className='btn active' onClick={() => handleButtonClick("/images/image1.png")}></Btn>
          <Btn className='btn' onClick={() => handleButtonClick("/images/image2.png")}></Btn>
          <Btn className='btn' onClick={() => handleButtonClick("/images/image3.png")}></Btn>
        </ControlBtn>
    </ProductPics>
  )
}

export default Product