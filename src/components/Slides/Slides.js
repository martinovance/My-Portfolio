import React, { useEffect, useRef } from "react";
import { gallery } from "../../constants/constants";
import {
  Img,
  AppGalleryImages,
  GalleryImagesContainer,
  GalleryImageCard,
} from "./SlidesStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Gallery = () => {
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
    const interval = setInterval(scrollHandler, 0.5);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Section>
      <SectionDivider />
      <SectionTitle main>Hit Me up</SectionTitle>
      <AppGalleryImages>
        <GalleryImagesContainer ref={divRef}>
          {gallery.map(({ image, index }) => (
            <GalleryImageCard
              className="flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <Img src={image} alt="gallery" />
            </GalleryImageCard>
          ))}
        </GalleryImagesContainer>
      </AppGalleryImages>
    </Section>
  );
};

export default Gallery;
