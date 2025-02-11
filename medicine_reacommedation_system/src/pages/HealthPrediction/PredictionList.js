import { Box, Typography, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import diseaseImageURL from '../../assets/Symtoms_Diagnosis.png';
import eyeDiseaseImageURL from '../../assets/heart.webp';



import Footer from '../../components/Footer';

const PredictionList = () => {
  return (
    <>
      {/* <div className='py-5 bg-[#e0e7ff]'> */}
      <div className='py-5 bg-[#f5f7fa]'>

       

        {/* Module 2: Disease Prediction Based on Symptoms */}
        <Box className='mb-12 bg-white rounded-lg shadow-md w-full max-w-6xl mx-auto p-4'>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <img 
                src={diseaseImageURL} 
                alt="Disease Prediction" 
                className="w-full rounded-lg shadow-lg" 
                style={{ maxHeight: '350px', objectFit: 'cover' }} // Adjust image height as needed
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom className='text-blue-600'>
                Disease Prediction Based on Symptoms
              </Typography>
              <Typography variant="body1" paragraph className='px-4'>
                This module helps you predict potential diseases based on symptoms:
              </Typography>
              <ul className='list-disc list-inside px-4'>
                <li>General symptoms: headaches, nausea, skin rashes, joint pain</li>
                <li>Advanced algorithms mapping symptoms to over 40 diseases</li>
                <li>Guidance on managing conditions: dietary, workouts, medications</li>
                <li>Empowering users with timely insights and health management</li> {/* Added 10 words */}
              </ul>
              <Button
                color="primary"
                className='mt-4 hover:bg-blue-700 transition duration-300'
                style={{ backgroundColor: '#007bff', padding: '10px 20px', float: 'right' }} // Align button to the right
              >
                <Link to="/diesase-diagnosis" className='text-white' style={{ textDecoration: 'none' }}>
                  Start with Symptom-based Disease Prediction
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Box>

       

        {/* Module 3: Heart Disease Prediction */}
        <Box className='mb-12 bg-white rounded-lg shadow-md w-full max-w-6xl mx-auto p-4'>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <img 
                src={eyeDiseaseImageURL} 
                alt="Heart Disease Prediction" 
                className="w-full rounded-lg shadow-lg" 
                style={{ maxHeight: '380px', objectFit: 'cover' }} // Adjust image height as needed
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom className='text-blue-600 mb-4'>
                Heart Disease Prediction
              </Typography>
              <Typography variant="body1" paragraph className='px-4'>
                Use this module to diagnose heart conditions based on your health metrics and symptoms. By providing relevant data, you can evaluate your risk for heart diseases and receive recommendations.
              </Typography>
              <Typography variant="body1" paragraph className='px-4'>
                Diseases covered in this module include:
              </Typography>
              <ul className='list-disc list-inside px-4'>
                <li>Coronary Artery Disease</li>
                <li>Heart Failure</li>
                <li>Arrhythmia</li>
                <li>Normal (No disease detected)</li>
              </ul>
              <Button
                color="primary"
                className='mt-4 hover:bg-blue-700 transition duration-300'
                style={{ backgroundColor: '#007bff', padding: '10px 20px', float: 'right' }} // Align button to the right
              >
                <Link to="/heart-disease" className='text-white' style={{ textDecoration: 'none' }}>
                  Start with Heart Disease Prediction
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Box>

        

      </div>
      <Footer />
    </>
  );
};

export default PredictionList;
