import Size from './Size'
import Color from './Size'
import { FormStyle, SizeSelect, Para, ColorSelect, Quantity, InputStyle, Button } from './styled-component/FormStyle'
import './app.css'


const Form = (props) => {
  return (
    <FormStyle>
      <SizeSelect>
        <Para>Size</Para>
        <Size name='small' type='radio' span='S' id='small' />
        <Size name='medium' type='radio' span='M' id='medium' />
        <Size name='large' type='radio' span='L' id='large' />
        <Size name='x-large' type='radio' span='XL' id='x-large' />
        <Size name='xx-large' type='radio' span='XXL' id='xx-large' />
      </SizeSelect>
      <ColorSelect>
        <Para $width>Color</Para>
        <Color name='red' type='radio' className='color-1' id='red'/>
        <Color name='green' type='radio' className='color-2' id='green'/>
        <Color name='blue' type='radio' className='color-3' id='blue'/>
        <Color name='yellow' type='radio' className='color-4' id='yellow'/>
      </ColorSelect>
      <Quantity>
       <Para $width>Quantity</Para>
       <InputStyle type="number" value="1" />
      </Quantity>
      <Button>Buy Now</Button>
    </FormStyle>
  )
}

export default Form