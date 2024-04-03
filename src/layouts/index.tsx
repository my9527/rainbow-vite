import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import BgImage from "@/assets/layout/bg.svg";
import FooterImage from "@/assets/layout/footer.svg";
import BirdIcon from "@/assets/layout/bird.svg";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${BgImage});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 90px;
  padding-bottom: 78px;
  box-sizing: border-box;
`;

const MainContent = styled.div`
  width: 1450px;
  border: 3px solid #057003;
  margin: auto;
  height: 900px;
  position: relative;
  box-sizing: border-box;
  .bg {
    width: 1450px;
    height: 100%;
    background: #021b02;
    position: absolute;
    top: 15px;
    right: -15px;
    z-index: 2;
  }
  .content {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
const Footer = styled.div`
  background-image: url(${FooterImage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 68px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;
const Bird = styled.img`
  width: 68px;
  height: 53px;
  flex-shrink: 0;
  position: absolute;
  top: 562px;
  right: -120px;
`;
const BaseLayout: React.FC = () => {
  return (
    <Wrapper>
      <MainContent>
        <div className="bg"></div>
        <div className="content">
          <Header />
          <Outlet />
        </div>
        <Bird src={BirdIcon} />
      </MainContent>
      <Footer />
    </Wrapper>
  );
};
export default BaseLayout;
