import Image from "next/image";
import { Card } from "../../collections";

import {
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledCardsContainer,
  StyledImageContainer,
  StyledContentContainer
} from "./elements";

const card1Props = {

  title: "Brief",
  description: "Complete brief writing or simple guidance on what to include, we've got you covered",
  width: "20",
  src: "/img/edit-tools.png"
};
const card2Props = {

  title: "Search",
  description: "In-depth agency search covering; criteria matching, door knocking and due-diligence vetting.",
  width: "22",
  src: "/img/business.png"
};
const card3Props = {

  title: "Pitch",
  description: "Comprehensive pitch management, including comms, diary management and pitch hosting",
  width: "24",
  src: "/img/meeting.png"
};

export const Services = ({ image, title, description, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      <StyledContentContainer>
      <StyledImageContainer>
        <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
      </StyledImageContainer>
      <StyledCardsContainer>
        <Card {...card1Props} />
        <Card {...card2Props} />
        <Card {...card3Props} />
      </StyledCardsContainer>
      
      </StyledContentContainer>
    </StyledContainer>
  );
};
