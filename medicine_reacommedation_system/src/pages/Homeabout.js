import React from 'react';


import images2 from '../assets/images2.webp';
import images4 from '../assets/images4.webp';

import images6 from '../assets/images5.webp';


const Homeabout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* First Section */}
      <div className="bg-[#f5f7fa] py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Accurate Disease Predictions</h2>
        <p className="text-center text-lg text-gray-600 mb-8">
          Discover how our modules predict potential diseases based on symptoms and data for eye health, heart conditions, and diabetes.
          <a href="#" className="text-indigo-600 underline"> Learn more.</a>
        </p>

        {/* Cards Section */}
        <div className="flex justify-center flex-wrap gap-8 mb-12">
          <div className="bg-white shadow-lg rounded-lg p-6 w-80 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-indigo-50">
            <img
              src={images2}
              alt="Symptom-based Disease Prediction"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Heart Dieases Prediction</h3>
            <p className="text-gray-600">
            The heart disease prediction model analyzes key health metrics, such as blood pressure, cholesterol levels, and lifestyle factors, to assess the risk of developing heart-related conditions. 
            </p>
          </div>

          
        
        {/* Cards Section */}
        <div className="flex justify-center flex-wrap gap-8 mb-12">
          <div className="bg-white shadow-lg rounded-lg p-6 w-80 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-indigo-50">
            <img
              src={images4}
              alt="Symptom-based Disease Prediction"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Symptom-Based Prediction</h3>
            <p className="text-gray-600">
              Enter general symptoms like headaches, nausea, and joint pain to predict over 40 diseases .
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 w-80 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-indigo-50">
            <img
              src={images6}
              alt="Health Management Tips"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Health Management Guidance</h3>
            <p className="text-gray-600">
              Receive personalized advice on managing conditions through dietary tips, workouts, and medications.
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeabout;
