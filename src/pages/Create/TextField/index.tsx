import { ReactNode, useState } from "react";
import styled, { css } from "styled-components";


const Wrapper = styled.div<{ $error: boolean, $active: boolean }>`
  display: flex;
  border: 1px solid transparent;
  background: ${props => props.$active ? '#C8EA8E' : '#E9E9E9'};
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 17px;
  box-sizing: border-box;
  gap: 10px;
  
  ${({ $error }) => $error && css`
    border-color: #FF6D6D;
  `}
`
const Input = styled.input<{ $inputAlign?: 'left' | 'right' }>`
  outline: none;
  flex-grow: 1;
  height: 100%;
  border: none;
  background: transparent;
  ${({ $inputAlign }) => $inputAlign === 'right' && css`
    text-align: right;
  `}
`

interface ITextFieldProps {
  value: string;
  onChange: (val: string) => void;
  error?: boolean;
  suffix?: ReactNode;
  prefix?: ReactNode;
  className?: string;
  readonly?: boolean;
  inputAlign?: 'left' | 'right';
}
const TextField = (props: ITextFieldProps) => {
  const { value, onChange, error, suffix, prefix, className, readonly, inputAlign = 'left' } = props;

  //is input active
  const [active, setActive] = useState(false);

  const handleFocus = () => {
    setActive(true);
  };
  const handleBlur = () => {
    setActive(false);
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event?.target.value;

    // const numericValue = input.replace(/[^0-9]/g, '');
    // //filter non-numeric input
    // if (numericValue !== input) {
    //   event.preventDefault();
    // }
    onChange && onChange(input);
  };
  return (
    <Wrapper $active={active || !!readonly} $error={!!error} className={className}>
      { prefix }
      <Input 
        onFocus={handleFocus} 
        value={value ?? ''} 
        onChange={handleInputChange} 
        onBlur={handleBlur}
        readOnly={readonly}
        $inputAlign={inputAlign}
      />
      {/* <Bg>
        <BgOne />
        <BgTwo />
        <BgThree />
        <BgFour />
      </Bg> */}
       { suffix }
    </Wrapper>
  )
}

export default TextField;