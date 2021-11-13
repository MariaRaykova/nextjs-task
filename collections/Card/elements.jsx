import styled from "styled-components";


export const StyledCard = styled(({width, ...props }) => <div {...props} />)`
display: flex;
justify-content:center;
background-color: #f1f1f1;
margin: 1rem;
border-radius: 15px;
width: ${({ width }) => width}rem;
&:hover {
  border: 3px solid  #2984fb;
}
`;
export const StyledCardIcon = styled(({ ...props }) => <div {...props} />)`
display: flex;
align-items: center;
justify-content:center;
margin-right: 1rem;
`;
export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 70%;
  font-family: sans-serif;
`;
export const StyledCardHeader = styled((props) => <div {...props} />)`
font-family: Poppins;
font-size: 1rem;
font-weight:600;
margin-top:10px;
${StyledCard}:hover &{
  color: #2984fb;
  text-decoration: underline;
}

`;
export const StyledCardText = styled(({ ...props }) => <div {...props} />)`
font-family: Poppins;
font-size: 0.75rem;
margin-bottom:10px;
`;


