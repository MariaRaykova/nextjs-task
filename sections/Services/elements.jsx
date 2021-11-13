import styled from "styled-components";
import { SectionContainer, SectionHeading, SectionSubheading, SectionParagraph } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
flex-flow: column wrap;
  align-items: center;
 
`;


export const StyledTitle = styled((props) => <SectionHeading {...props} />)`
  margin-top: 7rem;
  text-align: center;
  color: black;
  line-height: 0.1rem;
`;

export const StyledDescription = styled((props) => <SectionParagraph {...props} />)`
  line-height: 0.1rem;
  font-weight:400;
 font-size: 1.5rem;
`;

export const StyledContentContainer = styled(({ ...props }) => <div {...props} />)`
background-image: url("/img/background.png");
background-repeat:no-repeat;
background-size:contain;
display: flex;
  justify-content: center;
  color: black;
  font-family: sans-serif;
  margin-top: 3rem;
  width: 100%;
  @media only screen and (max-width: 1024px) {
    background-image: url("/img/background.png");
background-repeat:no-repeat;
background-size:120%;
   flex-flow: column wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledCardsContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 20rem;
  max-height: 34rem;
  width: 100%;
  height: 100%;
  margin-right: 5rem;
`;
