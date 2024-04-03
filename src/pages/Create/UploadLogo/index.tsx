import { ReactNode, useState } from "react";
import styled, { css } from "styled-components";
import UploadImg from '../../../assets/upload.svg'

const Wrapper = styled.div<{ $error: boolean, $active: boolean }>`
  display: flex;
  border: 1px solid transparent;
  background: #E9E9E9;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  position: relative;

  .inner {
    background: ${props => props.$active ? '#C8EA8E' : '#E9E9E9'};
    width: 100%;
    height: 100%;
  }
  
  ${({ $error }) => $error && css`
    border-color: #FF6D6D;
  `}
`
const Input = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  outline: none;
  flex-grow: 1;
  height: 100%;
  border: none;
  background: transparent;
`
const StyledImg = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
interface IUploadLogoProps {
  value: string;
  onChange: (val: string) => void;
  error?: boolean;
  className?: string;
}
const UploadLogo = (props: IUploadLogoProps) => {
  const { value, onChange, error, className } = props;

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
    <Wrapper $active={active} $error={!!error} className={className}>
      <Input 
        onFocus={handleFocus} 
        value={value ?? ''} 
        onChange={handleInputChange} 
        onBlur={handleBlur}
        onDragEnter={handleFocus}
        onDragLeave={handleBlur}
        type="file"
      />
      <div className="inner" />
      <StyledImg src={UploadImg} alt="upload" />
    </Wrapper>
  )
}

export default UploadLogo;