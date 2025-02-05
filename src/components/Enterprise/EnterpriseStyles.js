import styled from 'styled-components';

export const DisplayWrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  // padding: 2rem;
  padding-bottom: 0;
}
`;

export const DisplayCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  padding: 16px;
  width: 500px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    // padding: 2rem;
  }
`;

export const GridContainer = styled.section`
display: flex;
flex-direction: row;
width: 100%;
padding: 3rem;
place-items: center;
gap: 3rem;
overflow-x: scroll;
-ms-overflow-style: none;
scrollbar-width: none;
&::-webkit-scrollbar {
  display: none;
}
@media ${(props) => props.theme.breakpoints.sm} {
  padding: 2rem;
  padding-bottom: 0;
}
`;

export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  min-width: 300px;
  min-height: 400px;
  padding: 12px;
  position: relative;
  cursor: pointer;
  @media ${(props) => props.theme.breakpoints.sm} {
    min-width: 100%;
  }
`;

export const CardContent = styled.section`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
gap: 8px;
// @media ${(props) => props.theme.breakpoints.sm} {
//   display: flex;
//   flex-direction: column;
//   padding: 2rem;
//   padding-bottom: 0;
// }
`;

export const ContentWrapper = styled.section`
display: flex;
justify-content: flex-start;
align-items: center;
gap: 8px;
// @media ${(props) => props.theme.breakpoints.sm} {
//   display: flex;
//   flex-direction: column;
//   padding: 2rem;
//   padding-bottom: 0;
// }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 2rem;
  color: #9cc9e3;
`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  // padding: .2rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 10px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  // padding: 0 20px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
}
`;

export const Highlight = styled.p`
  width: 100%;
  padding: 0 10px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: start;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
}
`;

export const Stack = styled.div`
width: 90%;
position: absolute;
bottom: 0;
padding-bottom: 20px;
margin-left: auto;
`;

export const TagList = styled.ul`
display: flex;
justify-content: flex-end;
padding-top: 2rem;
flex-wrap: wrap;
gap: 8px;
`;

export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`;

export const Img = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 5px;
`

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1rem;
padding: 0 0.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;
}
`;