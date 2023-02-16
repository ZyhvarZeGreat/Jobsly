import React from "react";
import "./Footer.css";
import { Grid, Stack, Box, useMediaQuery, useTheme, Typography } from "@mui/material";
const Footer = () => {
  const Footer_Links = [
    {
      heading: "About",
      links: ["Companies", "Pricing", "Terms", "Advice", "Privacy Policy"],
    },
    {
      heading: "Resources",
      links: ["Help Docs", "Guide", "Updates", "Contact Us"],
    },
  ];

  const theme = useTheme()
  const query = useMediaQuery(theme.breakpoints.up('md'))
  const fontName = 'Gilroy,sans-serif'

  return (
    <Grid
      className="Jobsly_Footer"
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
      xs={12}
    >

  

    </Grid>
  );
};

export default Footer;
