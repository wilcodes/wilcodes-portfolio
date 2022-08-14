import {styled} from "@mui/material/styles";
import {ListItem, Stack, Typography, Grid} from "@mui/material";

export const SkillsBox = styled(Stack)`
  background-color: #3F3D55;
  height: auto;
  padding: 1rem;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 50px 50px 0 0;

  ${props => props.theme.breakpoints.up("sm")} {
    border-radius: 100px 100px 0 0;
  }
`;

export const SkillsTitle = styled(Typography)`
  color: #ffffff;
  text-align: center;
  font-family: 'Inconsolata', monospace;
  letter-spacing: -1.5px;
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: 1.6rem;
  line-height: 2.5rem;

  ${props => props.theme.breakpoints.up("sm")} {
    font-size: 2.2rem;
  }


`

export const Element = styled(ListItem)`
  color: #474646;
  animation: translateinfinite 1s infinite alternate;
  position: relative;
  transition: 3ms ease-in-out;
  display: flex;
  flex-flow: column;
  cursor: pointer;
  justify-content: center;
  border-radius: 70%;
  background-color: #ffffff;
  width: 50px;
  height: 50px;
  @keyframes translateinfinite {
    to {
      transform: scale(1.1);
    }

  }

  ${props => props.theme.breakpoints.up("sm")} {
    width: 65px;
    height: 65px;
  }

`
export const SkillsRow = styled('div')`
  text-align: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  ${props => props.theme.breakpoints.up("sm")} {
    margin: 2rem 0;

  }
`

export const Label = styled(Typography)`
  top: 110%;
  position: absolute;
  box-sizing: border-box;
  color: #fff;
`

export const GridController = styled('div')`
  align-items: center;
  margin: 2rem 1.3rem;

  ${props => props.theme.breakpoints.up("sm")} {
    margin: 2rem 2rem;

  }

  ${props => props.theme.breakpoints.up("md")} {
    margin: 1rem 2rem;

  }

`