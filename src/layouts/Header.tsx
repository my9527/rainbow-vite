import { CustomConnectButton } from "@/components/CutomConnectButton";
import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const Header = () => {
  return (
    <Wrapper>
      <CustomConnectButton />
    </Wrapper>
  );
};
export default Header;
