import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import { useSignUpMutation } from '../redux/apis/auth.apis'
import { toast } from 'react-toastify'

const Register = () => {
    const [signUp, { data, isError, error }] = useSignUpMutation()
    const [formErrors, setFormErrors] = useState()

    const initialValues = {
        firstName: 'john',
        lastName: 'doe',
        email: 'john@gmail.ocm',
        phone: '98989898',
        password: '123456',
        confirmPassword: '123456',
    }

    const onSubmit = (values, { resetForm }) => {
        if (formErrors.length === 0) {
            console.log('Form submitted', values);
            signUp(values)
        }

    }

    const validate = (values) => {
        const errors = [];

        if (!values.firstName || !values.lastName || !values.email || !values.phone || !values.password || !values.confirmPassword) {
            errors.push("Please fill all required fields");
        } else if (!/^[a-zA-Z]+$/i.test(values.name)) {
            errors.push("Only alphabetic characters are allowed for name");
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.push("Please enter a valid email address");
        } else if (!/^[1-9]{5,14}$/.test(values.phone)) {
            errors.push("Please enter a valid phone number");
        } else if (values.password.length < 6) {
            errors.push("Password should be of minimum 6 characters length");
        } else if (values.password !== values.confirmPassword) {
            errors.push("Passwords do not match");
        }

        setFormErrors(errors);
    };

    return <>
        <Box sx={{
            width: '100%',
            height: '100vh',
            backgroundImage: 'url(https://images.unsplash.com/photo-1551384745-01b8c3f3fd41?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            paddingX: { xs: '12px' },
            paddingTop: '30px'
        }}>


            <Box height={'100%'}>
                <Container disableGutters>
                    <Box>
                        {formErrors && formErrors.map((item, i) => <Box key={i} sx={{ paddingY: 1, paddingX: 2, backgroundColor: '#cd2c22', color: 'white' }}>
                            <Typography fontSize={'14px'}>
                                {formErrors}
                            </Typography>
                        </Box>)
                        }
                    </Box>
                </Container>
                <Grid container sx={{ justifyContent: 'center', alignItems: 'center', height: '90%' }}>
                    <Grid item xs={12} sm={9} md={7} lg={5} sx={{
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        color: 'white',
                        paddingX: '50px',
                        paddingY: '70px',
                    }}>
                        <Typography sx={{ fontSize: '22px', textAlign: 'center', fontWeight: 'bold' }}>
                            Register Your Account
                        </Typography>

                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validate={validate}
                        >
                            {({ handleSubmit }) => {

                                return <Form onSubmit={handleSubmit}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Field
                                                name='firstName'
                                                as={TextField}
                                                placeholder='First name'
                                                fullWidth
                                                sx={{
                                                    backgroundColor: 'white',
                                                    marginTop: '40px',
                                                    '& .MuiInputBase-root': {
                                                        height: '40px',
                                                    },
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        border: 'none'
                                                    },
                                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                                        border: 'none',
                                                    },
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        border: 'none',
                                                    },
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Field
                                                name='lastName'
                                                as={TextField}
                                                placeholder='Last name'
                                                fullWidth
                                                sx={{
                                                    backgroundColor: 'white',
                                                    marginTop: '40px',
                                                    '& .MuiInputBase-root': {
                                                        height: '40px',
                                                    },
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        border: 'none'
                                                    },
                                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                                        border: 'none',
                                                    },
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        border: 'none',
                                                    },
                                                }}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Field
                                        name='email'
                                        as={TextField}
                                        placeholder='Enter your email'
                                        fullWidth
                                        sx={{
                                            backgroundColor: 'white',
                                            marginTop: '20px',
                                            '& .MuiInputBase-root': {
                                                height: '40px',
                                            },
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                border: 'none'
                                            },
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                border: 'none',
                                            },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                border: 'none',
                                            },
                                        }}
                                    />

                                    <Field
                                        name='phone'
                                        as={TextField}
                                        placeholder='Enter your phone number'
                                        fullWidth
                                        sx={{
                                            backgroundColor: 'white',
                                            marginTop: '20px',
                                            '& .MuiInputBase-root': {
                                                height: '40px',
                                            },
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                border: 'none'
                                            },
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                border: 'none',
                                            },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                border: 'none',
                                            },
                                        }}
                                    />

                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Field
                                                name='password'
                                                as={TextField}
                                                placeholder='Password'
                                                fullWidth
                                                sx={{
                                                    backgroundColor: 'white',
                                                    marginTop: '20px',
                                                    '& .MuiInputBase-root': {
                                                        height: '40px',
                                                    },
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        border: 'none'
                                                    },
                                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                                        border: 'none',
                                                    },
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        border: 'none',
                                                    },
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Field
                                                name='confirmPassword'
                                                as={TextField}
                                                placeholder='Confirm assword'
                                                fullWidth
                                                sx={{
                                                    backgroundColor: 'white',
                                                    marginTop: '20px',
                                                    '& .MuiInputBase-root': {
                                                        height: '40px',
                                                    },
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        border: 'none'
                                                    },
                                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                                        border: 'none',
                                                    },
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        border: 'none',
                                                    },
                                                }}
                                            />
                                        </Grid>
                                    </Grid>


                                    <Button type='submit' variant='contained'
                                        sx={{
                                            backgroundColor: '#cd2c22',
                                            borderRadius: 0,
                                            width: '100%',
                                            marginTop: '20px',
                                            '&:hover': {
                                                backgroundColor: '#cd2c22',
                                            }
                                        }}>
                                        Register
                                    </Button>
                                </Form>
                            }}
                        </Formik>


                        <Typography sx={{ marginTop: '12px', textAlign: 'center' }}>
                            If you already have an account? Please
                            <Link to="/login" style={{ textDecoration: 'none', marginLeft: '6px', color: '#cd2c22', fontWeight: 'bold' }}>Signin</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

        </Box >
    </>
}

export default Register