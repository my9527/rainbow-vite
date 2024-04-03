import styled from "styled-components";
import SwitchImage from "@/assets/switch/switch.svg";
import { useEffect, useRef, useState } from "react";
import BaseIcon from "@/assets/switch/base.svg";
import BNBIcon from "@/assets/switch/bnb.svg";

const Wrapper = styled.div`
  height: 46px;
  position: relative;
`;
const CurChain = styled.div`
  width: 47px;
  height: 46px;
  cursor: pointer;
  margin-right: 20px;
  background-image: url(${SwitchImage});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    border-radius: 50%;
  }
`;
const ChainsWrapper = styled.div`
  position: absolute;
  top: 46px;
  left: 0;
`;
const Chains = styled.div`
  margin-top: 12px;
  border-radius: 8px;
  border: 2px solid #09360f;
  background: #c8ea8e;
  display: flex;
  padding: 21px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;
const Item = styled.div`
  cursor: pointer;
  width: 144px;
  border-radius: 8px;
  background: #fff;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;
  img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    border-radius: 50%;
  }
  .label {
    color: #395111;
    font-family: Arial;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }
  &:hover,
  &:active {
    background: #395111;
    .label {
      color: #fff;
    }
  }
`;
const SwitchChain = () => {
  const chains = [
    {
      label: "Base",
      key: "base",
      icon: BaseIcon,
    },
    {
      label: "BNB",
      key: "bnb",
      icon: BNBIcon,
    },
  ];
  const [curChain, setCurChain] = useState({
    label: "Base",
    key: "base",
    icon: BaseIcon,
  });
  const [showSelect, setShowSelect] = useState(false);
  const chainsRef = useRef(null);
  const handleClick = (e: any) => {
    if (chainsRef?.current && !chainsRef?.current?.contains(e.target)) {
      setShowSelect(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [chainsRef?.current]);

  return (
    <Wrapper ref={chainsRef}>
      <CurChain onClick={() => setShowSelect(!showSelect)}>
        <img src={curChain?.icon} alt="" />
      </CurChain>
      {showSelect && (
        <ChainsWrapper>
          <Chains>
            {chains.map((item) => {
              return (
                <Item key={item?.key} onClick={() => setCurChain(item)}>
                  <img src={item?.icon} alt="" />
                  <p className="label">{item?.label}</p>
                </Item>
              );
            })}
          </Chains>
        </ChainsWrapper>
      )}
    </Wrapper>
  );
};
export default SwitchChain;
