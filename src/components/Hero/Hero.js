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
        Hi! I'm Martins, a Front-end developer specialized in building
        user-interfaces for websites and applications. Skilled in translating
        design concepts into functional code, creating responsive layouts, and
        ensuring that the user experience is seamless and intuitive.
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
