import {styled} from "@mui/material/styles";
import {Button} from "@material-ui/core";
import {Accordion, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";

export const ProjectButton = styled(Button)`
  color: #3F3D55 !important;
  box-shadow: 1px 1px 1px 1px #ebe8e8;
  margin-right: 1rem !important;
  padding: .5rem !important;
  a {
    color: #3F3D55;
    text-decoration: none;


  }
  
`

export const AccordionWrapper = styled(Accordion)`
  background-color: rgba(255, 255, 255, 0.7);
  width: 90%;
  border: none;
  box-shadow: none;
  padding: .5rem;
  text-align: justify;
  ${props => props.theme.breakpoints.up("lg")} {
    padding: 1rem;
  }

`
export const ProjectDescription = styled(Typography)`
  font-family: 'Open Sans', serif;

  ${props => props.theme.breakpoints.up("sm")} {
    font-size: 1.2rem;
  }


  ${props => props.theme.breakpoints.up("lg")} {
    font-size: 1.1rem;;
  }

  ${props => props.theme.breakpoints.up("xl")} {
    font-size: 1.1rem;
  }
`

export const AccordionLabel = styled(Typography)`
  font-family: 'Inconsolata', monospace;
  font-size: 1.3rem;
  color:#3F3D55 !important;
`;

export const ButtonWrapper =  styled(Stack)`
  margin-top: 1rem;
`
