import React from 'react'
import { Grid, Stack, Box, Typography, Divider, LinearProgress } from '@mui/material'
import { bodyFont, headerFont } from '../../Reusables/constants'
import './Job_Info_Card.css'

const Job_Info_Card = ({ logo, title, company, location, employment, category, view, capacity, viewChange }) => {



  return (
    <Grid xs={12} md={view} height={viewChange ? '20rem' : '15rem'} alignItems={viewChange ? 'flex-start' : ''} border='1px solid #e5e5e5' container justifyContent='space-between' >
      <Grid container md={viewChange ? 12 : 6} height={viewChange ? '60%' : '100%'} justifyContent={viewChange ? 'center' : ''}>
        <Stack width={viewChange ? '90%' : '100%'} gap='1rem' alignItems={viewChange ? 'flex-start' : 'center'} justifyContent='center' direction={viewChange ? 'column' : 'row'}>
          <Stack width={viewChange ? '100%' : '30%'} height='55%' alignItems={viewChange ? 'flex-start' : 'center'} justifyContent={viewChange ? 'center' : 'flex-start'}>
            <Box alignItems='center' display='flex' justifyContent={viewChange ? 'flex-start' : 'center'} className={viewChange ? 'card_img_container' : 'list_card_img_container'}>
              <img className={'card_img'} src={`${import.meta.env.VITE_BASE_URL}${logo}`} alt='' />
            </Box>
          </Stack>
          <Stack width={viewChange ? '100%' : '70%'} height='90%' justifyContent='center' direction='column' gap='.8rem' >
            <Typography sx={{ width: `100%` }} fontWeight='600' fontFamily={`${bodyFont}`} fontSize={viewChange ? 'var(--text-xxl) ' : 'var(--text-xxxl)'} variant='h4' component='h4'>
              {title}
            </Typography>

            <Stack color='#e5e5e5' direction='row' gap='.3rem'>
              <Typography fontFamily={`${bodyFont}`} variant='body1' component='p'>
                {company}
              </Typography>

              <Typography fontFamily={`${bodyFont}`} fontSize={'var(--text-base)'} color={'#acacac'} variant='body1' component='p'>
                {location}
              </Typography>
            </Stack>
            <Stack direction='row' alignItems='flex-start' gap='.3rem'>
              <Box display='flex' alignItems='center' justifyContent='center' height='2rem' borderRadius='20px' width='6rem' className={`-${employment}`}>
                <Typography fontFamily={`${bodyFont}`} variant='body1' component='p'>
                  {employment}
                </Typography>
              </Box>
              <Divider />
              <Box display='flex' alignItems='center' justifyContent='center' height='2rem' borderRadius='20px' width='8rem' className={`-${category}`}>

                <Typography fontFamily={`${bodyFont}`} variant='body1' component='p'>
                  {category}
                </Typography>
              </Box>

            </Stack>
          </Stack>


        </Stack>
      </Grid>

      <Grid md={viewChange ? 12 : 6}  container justifyContent={viewChange ? 'center' : 'flex-end'}>
        <Stack marginRight={ viewChange ? '0':'2rem'} height='100%' width={viewChange ? '100%' : '95%'} gap='.5rem' alignItems={viewChange ? 'center' : 'flex-end'} justifyContent='center' direction={'column'}>
          <button style={{ border: 'none', height: `${viewChange ? '3.2rem' : '3.7rem'}`, width: `${viewChange ? '90%' : '12rem'}`, backgroundColor: 'var(--secondary-color', color: '#fff', fontSize: 'var(--text-xl)', fontFamily: `${bodyFont}`, fontWeight: '500', cursor: 'pointer' }}>
            Apply
          </button>

          {/* <LinearProgress sx={{ height: '5px' }} color='success' variant={'determinate'} value={100} />
          <div class="progress-container">
            <progress style={{}} value="30" max="100">75%</progress>
          </div> */}

          <Stack alignItems={viewChange ? 'flex-start' : 'flex-end'} width={viewChange ? '90%' : '100%'}>
            <Typography fontWeight='600' width='12rem' fontSize='var(--text-base)' fontFamily={`${bodyFont}`} variant='body2' component='p'>
              1 applied   <Typography color='#acacac' variant='body1' fontSize='var(--text-base)' fontFamily={`${bodyFont}`} component='span'>
                of {capacity} vacancies
              </Typography>
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Job_Info_Card