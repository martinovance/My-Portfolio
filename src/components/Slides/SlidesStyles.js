import styled from "styled-components";

export const AppGalleryImages = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  max-width: 100%;
  position: relative;

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 100%;
  }
`;

export const GalleryImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: max-content;
  height: 200%;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Img = styled.img`
  width: 200%;
  height: 100%;
  object-fit: contain;
  opacity: 1;
  transition: 0.5s ease;

	@media ${props => props.theme.breakpoints.lg} {
		max-width: 100%
	}
`;
export const GalleryImageCard = styled.div`
  position: relative;
  min-width: 380px;
  height: 550px;
  margin-right: 40rem;

	@media ${props => props.theme.breakpoints.lg} {
		min-width: 400px;
		height: 320px;
		margin-right: 5rem;
	}

	@media ${props => props.theme.breakpoints.md} {
		min-width: 240px;
    height: 200px;
		margin-right: 2rem;
	}

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 400px;
    height: 250px;
		margin-right: 2rem;
  }
`;

export const GalleryImagesArrows = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
	bottom: 0%
`;

export const GalleryArrowIcon = styled.a`
  color: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  font-size: 5rem;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    color: white;
  }

	@media ${props => props.theme.breakpoints.md} {
		font-size: 3rem;
	}
`;
