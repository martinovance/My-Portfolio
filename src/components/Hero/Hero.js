import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome To <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        Hi, I’m Martins, a Front-End Developer passionate about crafting clean,
        responsive, and user-friendly web experiences. I specialize in
        transforming design concepts into efficient, scalable code while
        ensuring seamless performance across devices. My focus is on building
        intuitive interfaces that merge functionality with great user
        experience.
      </SectionText>
      <Button
        onClick={() => (window.location = "https://github.com/martinovance")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
