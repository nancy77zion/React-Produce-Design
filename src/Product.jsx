import { useState } from 'react'
import styled from 'styled-components'
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';

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
const Btn = styled.span`
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
  height: 100%;
  display: block;
`

const Product = () => {


  const [imgSrc, setImgSrc] = useState({image1});

  
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
          <Btn className='active' onClick={() => handleButtonClick(image1)}></Btn>
          <Btn  onClick={() => handleButtonClick(image2)}></Btn>
          <Btn  onClick={() => handleButtonClick(image3)}></Btn>
        </ControlBtn>
    </ProductPics>
  )
}

export default Product