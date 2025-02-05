import React, { useState, useEffect, useRef } from "react";

import {
  DisplayWrapper,
  DisplayCard,
  Highlight,
  CardContent,
  ContentWrapper,
  BlogCard,
  CardInfo,
  Img,
  TagList,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  TitleContent,
  Stack,
} from "./EnterpriseStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { enterprises } from "../../constants/constants";

const Projects = () => {
  const [displayText, setDisplayText] = useState(enterprises[0].description);
  const [displayHeader, setDisplayHeader] = useState(enterprises[0].title);
  const divRef = useRef(null);

  useEffect(() => {
    const scrollHandler = () => {
      const scrollWidth = divRef.current.scrollWidth;
      const clientWidth = divRef.current.clientWidth;

      if (divRef.current.scrollLeft + clientWidth >= scrollWidth) {
        divRef.current.scrollLeft = 0;
      } else {
        divRef.current.scrollLeft += 1;
      }
    };
    const interval = setInterval(scrollHandler, 20);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const myDiv = document.getElementById("up");
    if (myDiv) {
      myDiv.scrollIntoView({ behavior: 'smooth' });
    }
  }, [displayText])

  const handleClick = (header, text) => {
    setDisplayText(text);
    setDisplayHeader(header);
  };

  return (
    <Section nopadding id="projects">
      <div id="up" />
      <SectionDivider />
      <SectionTitle main>Enterprise Projects</SectionTitle>
      <DisplayWrapper>
        <DisplayCard>
          <TitleContent>
            <HeaderThree title>{displayHeader}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{displayText}</CardInfo>
        </DisplayCard>
      </DisplayWrapper>
      <GridContainer ref={divRef}>
        {enterprises.map(
          ({ id, title, images, description, subDesc, tags }) => (
            <BlogCard onClick={() => handleClick(title, description)} key={id}>
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardContent>
                <Highlight>{subDesc}</Highlight>
                {tags.map((tag, i) => (
                  <ContentWrapper>
                    <ExternalLinks>-</ExternalLinks>
                    <Highlight key={i}>{tag}</Highlight>
                  </ContentWrapper>
                ))}
              </CardContent>
              <Stack>
                  <TitleContent>Stack</TitleContent>
                  <TagList>
                    {images.map((image, i) => (
                      <Img src={image} />
                    ))}
                  </TagList>
              </Stack>
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>
  );
};

export default Projects;
