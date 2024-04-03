import styled from "styled-components";
import BgIcon from "@/assets/social/bg.svg";
import ActiveBgIcon from "@/assets/social/active_bg.svg";
import TelegramIcon from "@/assets/social/telegram.svg";
import TwitterIcon from "@/assets/social/twitter.svg";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 11px 23px;
  border-left: 3px solid #057003;
  background: #c8ea8e;
  gap: 20px;
`;
const Item = styled.div`
  width: 47px;
  height: 48px;
  cursor: pointer;
  background-image: url(${BgIcon});
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 17px;
    height: 14px;
    flex-shrink: 0;
  }
  &:hover,
  &:active {
    background-image: url(${ActiveBgIcon});
    height: 46px;
  }
`;
const Social = () => {
  return (
    <Wrapper>
      <Item>
        <img src={TwitterIcon} alt="" />
      </Item>
      <Item>
        <img src={TelegramIcon} alt="" />
      </Item>
    </Wrapper>
  );
};
export default Social;
