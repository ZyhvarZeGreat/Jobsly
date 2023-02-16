import React from "react";
import { Grid, Stack, useTheme, useMediaQuery, Typography } from "@mui/material";
const Home_Companies = () => {
  const fontName = 'Gilroy,sans-serif';
  const logo_data = [
    {
      logo: '',
      logo_alt: 'amd'
    },
    {
      logo: '',
      logo_alt: 'tesla'
    },
    {
      logo: '',
      logo_alt: 'microsoft'
    },
    {
      logo: '',
      logo_alt: 'intel'
    },
    {
      logo: '',
      logo_alt: 'mailchimp'
    },
  ];
  return (
    <Grid
      xs={11.5}

      container
      alignItems="center"
      justifyContent="center"

      className="Jobsly_Home_Companies"
    >
      <Stack width='100%' height='4rem' justifyContent='center' gap='2rem' direction='column' >
        <Typography fontSize='1.3rem' fontFamily={fontName} fontWeight={500} color='var( --footer-alt-text-color)' variant="subtitle1">
          Companies we've helped grow
        </Typography>
      </Stack>
      {
        logo_data.map((logo_item) => {
          const { logo, logo_alt } = logo_item
          return (
            <Grid item sx={{ height: '4rem', display: 'flex', alignItems: 'center' }} xs={12} md={2.4} backgroundColor='red' className=''>
              {logo_alt}
            </Grid>
          )
        })
      }
    </Grid>
  );
};

export default Home_Companies;
