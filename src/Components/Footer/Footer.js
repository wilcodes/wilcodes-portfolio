import React from 'react';
import { Stack } from '@mui/material';
import Link from '../../Link';
import SocialLinks from '../SocialLinks';
import { FooterBox, FooterCopyright, FooterLink } from './FooterStyles';
import { Grid } from '@material-ui/core';

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <FooterBox>
      <Grid container fluid="true" justifyContent={'space-evenly'} alignItems={'center'}>
        <Grid item sm={12} lg={3}>
          <Stack direction="row" justifyContent={'center'}>
            <Link href="/" color="secondary">
              <FooterLink> Home </FooterLink>
            </Link>

            <Link href="/projects" color="secondary">
              <FooterLink> Projects </FooterLink>
            </Link>
            <Link href="/about" color="secondary">
              <FooterLink> About </FooterLink>
            </Link>
            <Link href="/contact" color="secondary">
              <FooterLink> Contact </FooterLink>
            </Link>
          </Stack>
        </Grid>

        <Grid item sm={12} lg={3}>
          <SocialLinks padding={false} />
        </Grid>
        <Grid item lg={3}>
          <FooterCopyright>©{getCurrentYear()} Wilfredo Colina. All Rights Reserved.</FooterCopyright>
        </Grid>
      </Grid>
    </FooterBox>
  );
};

export default Footer;
