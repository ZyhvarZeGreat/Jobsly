import React from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import { Link,useNavigate } from 'react-router-dom'
const Mobile_nav = (props) => {
    const { font,opened,setOpened } = props
    const Mobile_Nav_Styles = {
        zIndex: 10,
        position: 'fixed',
        top: '0',
        bottom: '0',
        right: '0',
        left: '0',
        backdropFilter: 'blur(20px)',
        backgroundColor: 'hsla(0, 0%, 0%, 0.18);'
    }

    const navigate = useNavigate()

    const navbar_mobile_skew_variants = {
        slidein: {
            clipPath: "circle(0% at 86.3% 7.5%)",
            opacity: 1,
            transition: {
                duration: 2.5,
                delay: 0.5,
                ease: "easeIn",
            },
        },
        slideout: {
            clipPath: "circle(150% at 86.3% 7.5%)",
            opacity: 1,
            transition: {
                duration: 2,
                ease: "easeOut",
                delay: 0.5,
            },
        },
    };

    const Mobile_Navbar_Items = [
        {
            text: 'Home',
            link: '/'
        },
        {
            text: 'Jobs',
            link: 'Jobs'
        },
        {
            text: 'Companies',
            link: 'Companies'
        },
    ]

    return (
        <Grid alignItems={'center'} justifyContent={'center'} sx={Mobile_Nav_Styles} width='100%' minHeight='100%' xs={12} container>
            <Stack   alignItems='center' justifyContent={'center'} gap='2rem' height='100%' width='100%'>
                {Mobile_Navbar_Items.map((item) => {
                    return (

                        <button style={{backgroundColor:'transparent',border:'none',cursor:'pointer'}} onClick={()=>{setOpened(!opened),navigate(item.link) }}>
                            <Typography color={'var(--secondary-color)'} fontWeight={500} fontSize='var(--text-3xl)' fontFamily={font} component='h3' variant='h3'>
                                {item.text}
                            </Typography>
                        </button>
                    )

                })}
            </Stack>
        </Grid>
    )
}

export default Mobile_nav