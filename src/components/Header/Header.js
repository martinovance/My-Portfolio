import Link from "next/link";
import React from "react";

import { FiTwitter, FiInstagram } from "react-icons/fi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignment: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/martinovance">
        <AiFillGithub style="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/martins-ogunsina-107473194/">
        <AiFillLinkedin style="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/MartinsOgunsina">
        <FiTwitter style="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
