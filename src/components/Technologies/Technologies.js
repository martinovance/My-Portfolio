import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with range of technologies in the web development world. From
      Designs To Live Projects
    </SectionText>
    <List>
      <ListItem>
        <DiReact Size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with HTML & CSS, <br />
            Javascript.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend Size="3rem" />
        <ListContainer>
          <ListTitle>JS Libraries</ListTitle>
          <ListParagraph>
            Experience with <br />
            Next.JS, React.JS & Libraries such as react router dom, react hook
            form etc.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase Size="3rem" />
        <ListContainer>
          <ListTitle>UI Libraries</ListTitle>
          <ListParagraph>
            Experience with <br />
            Material-UI, Chakra-UI & Ant-Design
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
