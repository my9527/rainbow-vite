import styled from "styled-components";
import DinoGif from '../../assets/dino.gif'

const Wrapper = styled.div`
  width: 296px;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  img {
    transform: rotateY(180deg);
  }
`

const BigDinoGif = ({ className }: { className?: string }) => {
  return (
    <Wrapper className={className}>
      <img src={DinoGif} alt="" />
    </Wrapper>
  );
};
export default BigDinoGif;
