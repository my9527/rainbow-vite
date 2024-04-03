import styled from "styled-components";
import DinoGif from '../../assets/mini-dino.gif'
import Bg from '../../assets/mini-dino-bg.svg'

const Wrapper = styled.div`
  width: 144px;
  height: 128px;
  box-sizing: border-box;
  background: url(${Bg}) no-repeat;
  text-align: center;
  padding-top: 26px;
  img {
    width: 47px;
  }
`

const MiniDinoGif = ({ className }: { className?: string }) => {
  return (
    <Wrapper className={className}>
      <img src={DinoGif} alt="" />
    </Wrapper>
  );
};
export default MiniDinoGif;
