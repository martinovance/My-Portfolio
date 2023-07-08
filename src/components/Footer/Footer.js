import React from "react";
import { FiTwitter, FiInstagram } from "react-icons/fi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import { SectionTitle } from "../../styles/GlobalComponents";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <SectionTitle>Contact</SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:0810 036 1784">0810-336-1784</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:martinsogunsina@gmail.com">
            martinsogunsina@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating ideas for problem solving</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/martinovance">
            <AiFillGithub style="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/martins-ogunsina-107473194/">
            <AiFillLinkedin style="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/MartinsOgunsina">
            <FiTwitter style="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
