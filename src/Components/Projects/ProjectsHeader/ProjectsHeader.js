import React from 'react';
import { Grid } from '@mui/material';
import { HeaderDescription, HeaderTitle, HeaderWrapper } from './HeaderStyles';
import headerImage1 from '../../../assets/undraw_react_re_g3ui.svg';
import headerImage2 from '../../../assets/undraw_version_control_re_mg66.svg';

const ProjectsHeader = () => (
  <HeaderWrapper>
    <HeaderTitle variant={'h1'}>Look at my work so far!</HeaderTitle>
    <HeaderDescription>
      I have coded multiple projects during my Development Journey, take a look at them here!
    </HeaderDescription>
    <Grid container justifyContent={'center'}>
      <img src={headerImage1} alt={'React Developer'} />
      <img src={headerImage2} alt={'Github controller'} />
    </Grid>
  </HeaderWrapper>
);

export default ProjectsHeader;
