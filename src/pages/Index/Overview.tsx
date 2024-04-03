import React, { useEffect, useState } from "react";
import styled from "styled-components";
import OverviewIcon from "@/assets/index/overview.svg";
import HeartIcon from "@/assets/index/heart.svg";
import MiniDinoGif from "@/components/MiniDinoGif";
import ArrowIcon from "@/assets/index/arrow.svg";

const Wrapper = styled.div`
  border-top: 3px solid #057003;
  background: #09360f;
  padding: 62px 43px 0px 43px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  margin-bottom: 100px;
  .logo {
    width: 39px;
    height: 40px;
    flex-shrink: 0;
  }
  .title {
    color: #fff;
    text-align: center;
    font-family: Handjet;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
  }
  .heart {
    width: 136px;
    height: 35px;
    flex-shrink: 0;
  }
`;
const DataWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
const Data = styled.div`
  display: flex;
  align-items: center;
  gap: 86px;
  margin-bottom: 47px;
  .item {
    display: flex;
    flex-direction: column;
    gap: 42px;
    .label {
      color: #c8ea8e;
      text-align: center;
      font-family: Arial;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;

      display: flex;
      align-items: center;
      gap: 15px;
      .currency {
        border-radius: 999px;
        background: #c8ea8e;
        padding: 4px 18px;
        color: #395111;
        text-align: center;
        font-family: Arial;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 12px */
      }
    }
    .value {
      color: #fff;
      text-align: center;
      font-family: Handjet;
      font-size: 60px;
      font-style: normal;
      font-weight: 700;
      line-height: 100%;
    }
  }
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  .arrow {
    width: 36px;
    height: 60px;
    flex-shrink: 0;
  }
`;
const Overview = () => {
  return (
    <Wrapper>
      <Title>
        <img src={OverviewIcon} alt="" />
        <p className="title">Overview</p>
        <img src={HeartIcon} alt="" />
      </Title>
      <DataWrapper>
        <Data>
          <div className="item">
            <p className="label">Deployed Projects Count</p>
            <p className="value">10</p>
          </div>
          <div className="item">
            <div className="label">
              Total Project Funding Raised
              <p className="currency">ETH</p>
            </div>
            <p className="value">123,123,123,123</p>
          </div>
        </Data>
        <Right>
          <MiniDinoGif />
          <img src={ArrowIcon} className="arrow" alt="" />
        </Right>
      </DataWrapper>
    </Wrapper>
  );
};
export default Overview;
