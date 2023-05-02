import Size from './Size'
import Color from './Size'
import { FormStyle, SizeSelect, Para, ColorSelect, Quantity, InputStyle, Button } from './styled-component/FormStyle'
import { useState } from 'react'
import './app.css'


const Form = (props) => {

  const [inputs, setInputs] =useState({});
  console.log(inputs);

  const handleChange = (event) => {
    const names = event.target.name;
    const values = event.target.value;
    setInputs(val => ({...val, [names]: values}))
    console.log(names);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs));
  }

  return (
    <FormStyle onSubmit={handleSubmit}>
      <SizeSelect>
        <Para>Size</Para>
        <Size name='small' type='radio' span='S' id='small' onChange={handleChange} />
        <Size name='medium' type='radio' span='M' id='medium' onChange={handleChange} />
        <Size name='large' type='radio' span='L' id='large' onChange={handleChange} />
        <Size name='x-large' type='radio' span='XL' id='x-large' onChange={handleChange} />
        <Size name='xx-large' type='radio' span='XXL' id='xx-large' />
      </SizeSelect>
      <ColorSelect>
        <Para $width>Color</Para>
        <Color name='red' type='radio' className='color-1' id='red' onChange={handleChange}/>
        <Color name='green' type='radio' className='color-2' id='green' onChange={handleChange}/>
        <Color name='blue' type='radio' className='color-3' id='blue' onChange={handleChange}/>
        <Color name='yellow' type='radio' className='color-4' id='yellow' onChange={handleChange}/>
      </ColorSelect>
      <Quantity>
       <Para $width>Quantity</Para>
       <InputStyle type="number" name="1" value="1"/>
      </Quantity>
      <Button>Buy Now</Button>
    </FormStyle>
  )
}

export default Form