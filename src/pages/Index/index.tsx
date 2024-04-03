import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import DiamondIcon from "@/assets/index/diamond.gif";
import BigDinoGif from "../../components/BigDinoGif";
import { Header } from "./Header";

const Wrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  display: flex;
  flex: 1;
`;
const Left = styled.div`
  flex: 1;
  border-right: 3px solid #057003;
`;

const ProjectScrollWrapper = styled.div`
  cursor: pointer;
  border-top: 3px solid #057003;
  background: #c8ea8e;
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 100px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;
`;
const Projects = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  gap: 52px;
`;

const ProjectItem = styled.div<{ per: number }>`
  display: flex;
  align-items: center;
  gap: 10px;
  .circle {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: #395111;
  }
  .progress {
    border-radius: 999px;
    border: 1px solid #021b02;
    background: #fff;
    position: relative;
    width: 250px;
    height: 25px;
    box-sizing: border-box;
    .name {
      color: #021b02;
      text-align: center;
      font-family: Arial;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
      position: absolute;
      left: 13px;
      top: 6px;
    }
    .done {
      height: 100%;
      width: ${(props) => props.per + "%"};
      border-radius: 999px;
      border-right: ${(props) => {
        if (props.per === 100) {
          return "none";
        }
        return "1px solid #021b02";
      }};

      background: ${(props) => {
        if (props.per === 100) {
          return "linear-gradient(89deg, #BAC304 98.22%, #057003 1.78%)";
        }
        return "#398d44";
      }};
    }
    .per {
      color: #bac304;
      text-align: center;
      font-family: Arial;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 100%;
      position: absolute;
      right: 8px;
      top: 6px;
    }
    .diamond {
      width: 110px;
      flex-shrink: 0;
      position: absolute;
      right: -50px;
      top: -27px;
    }
    .tips {
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.8);
      padding: 13px;
      color: #021b02;
      font-family: Handjet;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%;
      position: absolute;
      left: 51px;
      top: 0;
    }
  }
`;
const Index = () => {
  const list = [
    { per: 20, name: "dino" },
    { per: 20, name: "dino2" },
    { per: 99, name: "dino3" },
    { per: 100, name: "dino4" },
  ];
  let timer: NodeJS.Timeout | number;
  const scrollFun = () => {
    const wrapper = document.getElementById("wrapper") as HTMLElement;
    const trades = document.getElementById("projects") as HTMLElement;
    const trades_copy = document.getElementById("projects_copy") as HTMLElement;

    trades_copy.innerHTML = trades?.innerHTML;
    if (trades_copy?.scrollWidth - wrapper?.scrollLeft <= 0) {
      wrapper.scrollLeft -= trades?.scrollWidth;
    } else {
      wrapper.scrollLeft++;
    }
  };
  useEffect(() => {
    // timer = setInterval(scrollFun, 50);
    return () => {
      clearInterval(timer);
    };
  }, [list.length]);
  return (
    <Wrapper>
      <Content>
        <Left>
          <Header />
        </Left>
        <BigDinoGif />
      </Content>
      <ProjectScrollWrapper
        id="wrapper"
        onMouseOver={() => clearInterval(timer)}
        onMouseOut={() => {
          // timer = setInterval(scrollFun, 50);
        }}
      >
        <Projects id="projects">
          {list.map((item) => {
            return (
              <ProjectItem
                per={item.per}
                onMouseOver={() => {
                  console.log("hover-item", item);
                }}
              >
                <div className="circle"></div>
                <div className="progress">
                  <p className="name">{item.name}</p>
                  <div className="done"></div>
                  <p className="per">{item.per}%</p>
                  {item.per === 100 && (
                    <img src={DiamondIcon} className="diamond" alt="" />
                  )}
                </div>
                <div className="tips">
                  <p>
                    Token address: 0x85E90a5430AF45776548ADB82eE4cD9E33B08077
                  </p>
                  <p> Minting progress: 10,000,000,000 / 10,000,000,000</p>
                </div>
              </ProjectItem>
            );
          })}
        </Projects>
        <Projects id="projects_copy"></Projects>
      </ProjectScrollWrapper>
    </Wrapper>
  );
};
export default Index;
