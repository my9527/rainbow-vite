import { useState } from "react";
import styled, { css } from "styled-components";


const Wrapper = styled.div<{ $error: boolean, $active: boolean }>`
  display: flex;
  border: 1px solid transparent;
  background: ${props => props.$active ? '#C8EA8E' : '#E9E9E9'};
  width: 100%;
  height: 227px;
  resize: none;
  padding: 17px;
  box-sizing: border-box;
  
  ${({ $error }) => $error && css`
    border-color: #FF6D6D;
  `}
`
const Input = styled.textarea`
  outline: none;
  flex-grow: 1;
  height: 100%;
  border: none;
  background: transparent;
`
interface ITextareaProps {
  value: string;
  onChange: (val: string) => void;
  error?: boolean;
  suffix?: JSX.Element | null;
  prefix?: JSX.Element | null;
}
const Textarea = (props: ITextareaProps) => {
  const { value, onChange, error } = props;

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
    <Wrapper $active={active} $error={!!error}>
      <Input 
        onFocus={handleFocus} 
        value={value ?? ''} 
        onChange={handleInputChange} 
        onBlur={handleBlur}
        maxLength={200}
      />
    </Wrapper>
  )
}

export default Textarea;