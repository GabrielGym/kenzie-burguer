import { forwardRef, InputHTMLAttributes } from 'react';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  error?: string ;
}

const Input = forwardRef<HTMLInputElement, IInput>(
  ({ label, type, error, ...rest }, ref) => (
    <fieldset>
      <StyledTextField label={label} type={type}  ref={ref} {...rest}/>
      <StyledParagraph fontColor='red' >
        {error}
      </StyledParagraph>
    </fieldset>
  )
);

export default Input;
