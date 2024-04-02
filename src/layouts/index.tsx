import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";


const BaseLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <div>footer</div>
    </div>
  );
};
export default BaseLayout;
