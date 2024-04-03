import styled from "styled-components";
import BgIcon from "@/assets/button/bg.svg";
import ActiveBgIcon from "@/assets/button/active_bg.svg";

const Wrapper = styled.div`
  width: 260px;
  height: 100px;
  flex-shrink: 0;
  cursor: pointer;
  background-image: url(${BgIcon});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  .text {
    color: #021b02;
    font-family: Arial;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
  }

  &:hover,
  &:active {
    color: #fff;
    background-image: url(${ActiveBgIcon});
  }
`;
const Button: React.FC<{
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  btnText?: string;
  className?: string;
  children?: React.ReactNode;
}> = ({ children, className, onClick, btnText }) => {
  return (
    <Wrapper className={className} onClick={onClick}>
      {children}
      {btnText && <p className="text">{btnText}</p>}
    </Wrapper>
  );
};
export default Button;
