
import Image from "next/image";
import { StyledCard, StyledCardText, StyledCardHeader, StyledCardIcon, StyledTextContainer } from "./elements";

export const Card = ({  title, description, width, src, ...props }) => {
    return (
        <StyledCard width={width} {...props}>
            <StyledCardIcon>
            <Image src={src} alt="" width="50px" height="50px" />
            </StyledCardIcon>
            <StyledTextContainer>
                <StyledCardHeader>{title}</StyledCardHeader>
                <StyledCardText>{description}</StyledCardText>
            </StyledTextContainer>
        </StyledCard>
    );
};