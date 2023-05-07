import React from "react";
import { Grid, Stack, useTheme, useMediaQuery, Typography } from "@mui/material";
import { bodyFont } from "../../Reusables/constants";
const Home_Companies = () => {
  const theme = useTheme()
  const query = useMediaQuery(theme.breakpoints.up('md'))
  const fontName = 'Gilroy,sans-serif';
  const logo_data = [
    {
      logo: 'flutterwave.svg',
      logo_alt: 'Flutterwave'
    },
    {
      logo: 'binance.svg',
      logo_alt: 'binance'
    },
    {
      logo: 'MoonPay.svg',
      logo_alt: 'MoonPay'
    },
    {
      logo: 'paystack.svg',
      logo_alt: 'Paystack'
    },
    {
      logo: 'piggyvest.svg',
      logo_alt: 'PiggyVest'
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
      <Stack width='100%' height='4rem' alignItems={query ? 'flex-start':'center'} justifyContent='center' gap='2rem' direction='column' >
        <Typography fontSize='1.3rem' fontFamily={'Gilroy-Medium,sans-serif'} fontWeight={500} color='var( --footer-alt-text-color)' variant="subtitle1">
          Companies we've helped grow
        </Typography>
      </Stack>
      {
        logo_data.map((logo_item) => {
          const { logo, logo_alt } = logo_item
          return (
            <Grid item sx={{ height: '8rem', display: 'flex', alignItems: 'center', justifyContent: `${query ? 'flex-start' : 'center'}` }} xs={12} md={2.4} className=''>
              <img style={{ height: '6rem', width: '12rem' }} src={`../${logo}`} alt={logo_alt} />
            </Grid>
          )
        })
      }
    </Grid>
  );
};

export default Home_Companies;
