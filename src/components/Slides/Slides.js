import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { gallery } from "../../constants/constants";
import {
  Img,
  AppGalleryImages,
  GalleryImagesContainer,
  GalleryImageCard,
  GalleryImagesArrows,
  GalleryArrowIcon,
} from "./SlidesStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <Section>
      <SectionDivider />
      <SectionTitle main>UI Conversion Slide</SectionTitle>
      <AppGalleryImages>
        <GalleryImagesContainer ref={scrollRef}>
          {gallery.map(({ image, index }) => (
            <GalleryImageCard
              className="flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <Img src={image} alt="gallery" />
            </GalleryImageCard>
          ))}
        </GalleryImagesContainer>

        <GalleryImagesArrows>
          <GalleryArrowIcon>
            <BsArrowLeftShort
              onClick={() => scroll("left")}
            />
          </GalleryArrowIcon>
          <GalleryArrowIcon>
            <BsArrowRightShort
              onClick={() => scroll("right")}
            />
          </GalleryArrowIcon>
        </GalleryImagesArrows>
      </AppGalleryImages>
    </Section>
  );
};

export default Gallery;
