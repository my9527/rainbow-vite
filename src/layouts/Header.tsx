import { CustomConnectButton } from "@/components/CutomConnectButton";
import styled from "styled-components";
import LogoIcon from "@/assets/header/logo.svg";
import Dot from "@/assets/header/dot.svg";
import SwitchChain from "./SwitchChain";
import Social from "./Social";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid #057003;
  background: #fff;
  box-sizing: border-box;
  padding-left: 43px;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  .logo {
    width: 29px;
    height: 42px;
    flex-shrink: 0;
    margin-right: 12px;
    cursor: pointer;
  }
  .name {
    color: #000;
    font-family: Arial;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    margin-right: 26px;
  }
  .dot {
    width: 108px;
    height: 25px;
    flex-shrink: 0;
  }
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Left>
        <img
          src={LogoIcon}
          className="logo"
          alt=""
          onClick={() => navigate("/")}
        />
        <p className="name">ERC50Launch</p>
        <img src={Dot} className="dot" alt="" />
      </Left>
      <Right>
        {/* <SwitchChain /> */}
        <CustomConnectButton />
        <Social />
      </Right>
    </Wrapper>
  );
};
export default Header;
