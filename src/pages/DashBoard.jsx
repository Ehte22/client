import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { faGaugeHigh, faLock, faPenToSquare, faStar, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { grey } from '@mui/material/colors'
import { faHeart, faNewspaper } from '@fortawesome/free-regular-svg-icons'

const myAccount = [
    { page: 'Dashboard', icon: faGaugeHigh },
    { page: 'Edit Profile', icon: faPenToSquare },
    { page: 'Change Password', icon: faLock }
]

const bookings = [
    { page: 'Bookings', icon: faNewspaper },
    { page: 'Invoices', icon: faWallet },
    { page: 'Reviews', icon: faStar },
    { page: 'Wish List', icon: faHeart },
]

const DashBoard = () => {
    return <>
        <Box>
            <Box
                sx={{
                    width: '100%',
                    height: {
                        xs: '36vh',
                        sm: '46vh',
                    },
                    backgroundImage: 'url(/tours/bg-tour.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Box sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '12px'
                }}>
                </Box>

            </Box>

            <Box>
                <Grid container >
                    <Grid item md={2.5} sx={{ padding: '36px' }}>
                        <Box sx={{ backgroundColor: '#f3f3f3', marginTop: '20px' }}>
                            <Typography sx={{
                                fontFamily: 'ArcaMajora, Arial, sans-serif',
                                marginTop: '16px',
                            }}>
                                MY ACCOUNT
                            </Typography>

                            <Box sx={{ marginTop: '24px' }}>
                                {myAccount.map((item, i) => <Box key={i} sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '20px',
                                    marginTop: '16px'
                                }}>
                                    <FontAwesomeIcon icon={item.icon} color={grey[600]} fontSize='14px' />
                                    <Typography sx={{ color: grey[600], fontSize: '15px' }}>{item.page}</Typography>
                                </Box>)}
                            </Box>
                        </Box>

                        <Box sx={{ backgroundColor: '#f3f3f3', marginTop: '50px' }}>
                            <Typography sx={{
                                fontFamily: 'ArcaMajora, Arial, sans-serif',
                                marginTop: '16px',
                            }}>
                                MY BOOKINGS
                            </Typography>

                            <Box sx={{ marginTop: '24px' }}>
                                {bookings.map((item, i) => <Box key={i} sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '20px',
                                    marginTop: '16px'
                                }}>
                                    <FontAwesomeIcon icon={item.icon} color={grey[600]} fontSize='14px' />
                                    <Typography sx={{ color: grey[600], fontSize: '15px' }}>{item.page}</Typography>
                                </Box>)}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={9.5}>
                        <Box sx={{ padding: '40px' }}>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </>
}

export default DashBoard