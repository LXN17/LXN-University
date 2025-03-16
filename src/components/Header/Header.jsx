import React, { useEffect, useState } from "react";
import logo from "../../assets/logo-name.png";
import { styled } from "styled-components";

const HeaderContainer = styled.header`
  height: 100px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ee0a3d;
  background: #0a0d22;
`;

const ImgContainer = styled.img`
  height: 50px;
`;

const Header = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log("cleaning...");
    };
  }, []);

  return (
    <HeaderContainer>
      <ImgContainer src={logo} alt={"Logo"} />
      <span style={{ color: "#ee0a3d" }}>
        Время: {now.toLocaleTimeString()}
      </span>
    </HeaderContainer>
  );
};

export default Header;
