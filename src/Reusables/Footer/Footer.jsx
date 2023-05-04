import React from "react";
import "./Footer.css";
import { bodyFont, headerFont } from "../constants";
import { UilFacebook, UilInstagram, UilLinkedin, UilTwitter, UilBasketball } from '@iconscout/react-unicons'
import { Grid, Stack, Box, useMediaQuery, useTheme, Typography, FormGroup, Input, Divider } from "@mui/material";
const Footer = () => {

  const theme = useTheme()
  const query = useMediaQuery(theme.breakpoints.up('md'))


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

  const footerLogo = [
    {
      logo: <UilFacebook size={20} />,
      link: 'https://www.facebook.com/'
    },
    {
      logo: <UilInstagram size={20} />,
      link: 'https://instagram.com/'
    },
    {
      logo: <UilBasketball size={20} />,
      link: 'https://www.dribble.com/'
    },
    {
      logo: <UilLinkedin size={20} />,
      link: 'https://www.linkedin.com/'
    },
    {
      logo: <UilTwitter size={20} />,
      link: 'https://twitter.com/'
    },
  ]

  return (
    <Grid
      className="Jobsly_Footer"
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
      xs={12}
    >

      <Grid container minHeight={query ? '20rem' : '50rem'} xs={10.5} md={11}>


        <Grid container xs={12}>

          <Grid height='80%' container xs={12}>
            <Grid xs={12} md={3} container alignItems='flex-start' >

              <Stack alignItems='flex-start' justifyContent='center' width='100%' height={query ? '50%' : '100%'}>
                <Typography color='var(--secondary-color)' fontFamily={headerFont} fontWeight={600} variant='h3' component='h3' >
                  Jobsly
                </Typography>

                <Typography fontFamily={bodyFont} color={'var(--footer-alt-text-color)'} fontSize='1.2rem' variant='body1' component='p'>
                  Find your dream job and make it yours
                </Typography>
              </Stack>
            </Grid>

            <Grid xs={12} md={9} container >
              <Grid container alignItems='center' justifyContent='center' xs={12} md={7}>
                {Footer_Links.map((data) => {
                  return (
                    <Stack key={data.heading} width={query ? '40%' : '50%'} height='90%' gap='.6rem'>
                      <Typography color={'var(--footer-alt-text-color)'} variant="h5" component='h4' fontFamily={bodyFont} fontWeight={500}>
                        {data.heading}
                      </Typography>
                      {data.links.map((link) => {
                        return (
                          <Typography color={'var(--footer-alt-text-color)'} key={link} fontFamily={bodyFont}>
                            {link}
                          </Typography>
                        )
                      })}
                    </Stack>
                  )
                })}
              </Grid>
              <Grid xs={12} container alignItems='center' justifyContent='center' md={5}>
                <Stack height='90%' width={query ? '90%' : '100%'} gap='1rem'>
                  <Typography color={'var(--footer-alt-text-color)'} variant='h5' component='h5' fontWeight='500' fontFamily={bodyFont} >
                    Get job notifications
                  </Typography>
                  <Typography color={'var(--footer-alt-text-color)'} variant='body1' component='p' fontWeight='400' fontFamily={bodyFont} >
                    The latest jobs,news and articles sent to your inbox weekly
                  </Typography>

                  <FormGroup style={{ display: 'flex', flexDirection: `${query ? 'row' : 'column'}`, gap: `${query ? '.5rem' : '.8rem'}` }}>
                    <Input className="Jobsly_Footer_Input" placeholder="Enter your email address" sx={{ height: '3.2rem', width: `${query ? '14rem' : '90%'}`, backgroundColor: '#fff' }} fontFamily={bodyFont} />
                    <button style={{ fontFamily: `${bodyFont}`, fontSize: '1.2rem', width: '9.8rem', cursor: 'pointer', height: '3.2rem', border: 'none', backgroundColor: 'var(--secondary-color)', color: '#fff' }}> Subscribe</button>
                  </FormGroup>
                </Stack>
              </Grid>
            </Grid>
          </Grid>


          <Divider />
          <Grid container height={query ? '20%' : '13%'} direction='row' alignItems='center' justifyContent={query ? 'center' : 'space-between'} xs={12}>
            <Grid xs={12} md={6} container alignItems={'center'} justifyContent={query ? 'flex-start' : 'center'}>
              <Typography color={'var(--footer-alt-text-color)'} fontFamily={bodyFont} variant='body2' fontSize={'1rem'} component='p'>
                2021 @ Jobsly. Developed by The Aesir Dev
              </Typography>
            </Grid>

            <Grid xs={12} md={6} container gap='2rem' alignItems='center' justifyContent={query ? 'flex-end' : 'center'} >
              {footerLogo.map((data) => {
                return (
                  <a style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'white' }} key={data.link} href={data.link}>
                    <Box borderRadius='50%' height='2rem' backgroundColor='var(--footer-icon-color)' width='2rem' display='flex' alignItems='center' justifyContent='center'>
                      {data.logo}
                    </Box>
                  </a>
                )
              })}
            </Grid>
          </Grid>
        </Grid>


      </Grid>

    </Grid>
  );
};

export default Footer;
