import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with  range of technologies in the web develpment world.
      From Designs To Live Front-end Projects
    </SectionText>
    <List>
      <ListItem>
        <DiReact Size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with HTML & CSS, <br />
            React.JS & Next.JS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend Size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma; Coverting designs into full functioning web app
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase Size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Limited experience with <br />
            Node.JS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
