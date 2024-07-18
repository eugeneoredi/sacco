import React from 'react';
import { Box, Typography, Container, Grid, Paper, Card, CardContent, CardMedia, Button } from '@mui/material';
import loansImage from '../assets/loans.jpg';
import insuranceImage from '../assets/Insuarance.jpg';
import savingsImage from '../assets/savings.jpg';

const Home = () => {
    return (
        <>
            {/* Header Section */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                id='header'
            >
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            textAlign: 'center',
                            color: '#fff',
                            padding: '20px',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            borderRadius: '10px',
                        }}
                        className="header-text"
                    >
                        <Typography variant="h4" component="p">
                            Welcome to Our SACCO
                        </Typography>
                        <Typography variant="h1" component="h1" sx={{ mt: 2 }}>
                            We empower our members with financial solutions.
                        </Typography>
                    </Box>
                </Container>
            </Box>

            {/* Introduction Section */}
            <Box sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
                <Container maxWidth="md">
                    <Typography variant="h3" component="h2" gutterBottom>
                        About Us
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Our SACCO is dedicated to providing our members with the best financial services and support. We believe in empowering our community through savings and credit services tailored to meet the needs of our members.
                    </Typography>
                    <Button variant="contained" color="primary">Learn More</Button>
                </Container>
            </Box>

            {/* Services Section */}
            <Box sx={{ py: 8 }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" component="h2" gutterBottom>
                        Our Services
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={loansImage}
                                    alt="Loans"
                                />
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Loans
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        We offer affordable loans to help you achieve your financial goals.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={savingsImage}
                                    alt="Savings"
                                />
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Savings
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Our savings accounts offer competitive interest rates and flexible terms.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={insuranceImage}
                                    alt="Insurance"
                                />
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Insurance
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        We provide a variety of insurance options to protect you and your assets.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Testimonials Section */}
            <Box sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
                <Container maxWidth="md">
                    <Typography variant="h3" component="h2" gutterBottom>
                        Testimonials
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Paper elevation={3} sx={{ padding: 2 }}>
                                <Typography variant="body1" paragraph>
                                    "Joining this SACCO has been a life-changing experience. The loan I received helped me start my own business."
                                </Typography>
                                <Typography variant="subtitle1" align="right">
                                    - Member A
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper elevation={3} sx={{ padding: 2 }}>
                                <Typography variant="body1" paragraph>
                                    "The customer service is exceptional, and the savings plans are very beneficial."
                                </Typography>
                                <Typography variant="subtitle1" align="right">
                                    - Member B
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Call to Action Section */}
            <Box sx={{ py: 8 }}>
                <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" component="h2" gutterBottom>
                        Join Our SACCO Today!
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Become a member and start enjoying the benefits of our financial services.
                    </Typography>
                    <Button variant="contained" color="primary" size="large">Get Started</Button>
                </Container>
            </Box>

            {/* Footer Section */}
            <Box sx={{ py: 4, backgroundColor: '#333', color: '#fff' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" component="div">
                                Contact Us
                            </Typography>
                            <Typography variant="body1">
                                Email: info@sacco.com
                            </Typography>
                            <Typography variant="body1">
                                Phone: +123 456 7890
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" component="div">
                                Follow Us
                            </Typography>
                            <Typography variant="body1">
                                Facebook | Twitter | LinkedIn
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Home;
