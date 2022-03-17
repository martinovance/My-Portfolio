import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome To <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        Hi! I'm FancyDev, a Front-end devloper. I enjoy building everything from small sites,
        to rich interactive web apps with good interface, for easier user interaction and utilization.
      </SectionText>
      <Button onClick={( )=> window.location = 'https://github.com/martinovance'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;