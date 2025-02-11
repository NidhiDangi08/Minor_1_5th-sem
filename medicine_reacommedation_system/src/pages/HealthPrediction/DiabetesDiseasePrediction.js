import React, { useState } from 'react'
import { useDiabetesDiseaseModelPredictorMutation } from '../../services/userAuthApi';
import { Alert } from 'reactstrap';




const DiabetesDiseasePrediction = () => {

  const [server_msg, setServerMsg] = useState({})


  const [diabetesDiseaseModelPredictor, { isLoading }] = useDiabetesDiseaseModelPredictorMutation();




  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      Pregnancies: data.get('Pregnancies'),
      Glucose: data.get('Glucose'),
      BloodPressure: data.get('BloodPressure'),
      SkinThickness: data.get('SkinThickness'),
      Insulin: data.get('Insulin'),
      BMI: data.get('BMI'),
      DiabetesPedigreeFunction: data.get('DiabetesPedigreeFunction'),
      Age: data.get('Age'),
    }


    console.log("actualData is :-  ", actualData);


    const res = await diabetesDiseaseModelPredictor(actualData)
    if (res.error) {
      setServerMsg({})
      console.log(res.error.data.errors)
    }
    if (res.data) {
      setServerMsg(res.data.Prediction)
      console.log(res.data)

    }

  }




  return (
    
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6 style={{ backgroundColor: '#f0f8ff'" >

  <form className="space-y-6" onSubmit={handleSubmit}>
    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Diabetes Prediction Form</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="mb-3">
        <label htmlFor="Pregnancies" className="block mb-2 text-sm font-medium text-gray-900">Pregnancies:</label>
        <input type="number" id="Pregnancies" name="Pregnancies" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
      </div>

      <div className="mb-3">
        <label htmlFor="Glucose" className="block mb-2 text-sm font-medium text-gray-900">Glucose:</label>
        <input type="number" id="Glucose" name="Glucose" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
      </div>

      <div className="mb-3">
        <label htmlFor="BloodPressure" className="block mb-2 text-sm font-medium text-gray-900">Blood Pressure:</label>
        <input type="number" id="BloodPressure" name="BloodPressure" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
      </div>

      <div className="mb-3">
        <label htmlFor="SkinThickness" className="block mb-2 text-sm font-medium text-gray-900">Skin Thickness:</label>
        <input type="number" id="SkinThickness" name="SkinThickness" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
      </div>

      <div className="mb-3">
        <label htmlFor="Insulin" className="block mb-2 text-sm font-medium text-gray-900">Insulin:</label>
        <input type="number" id="Insulin" name="Insulin" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
      </div>

      <div className="mb-3">
        <label htmlFor="BMI" className="block mb-2 text-sm font-medium text-gray-900">BMI:</label>
        <input type="number" id="BMI" name="BMI" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
      </div>

      <div className="mb-3">
        <label htmlFor="DiabetesPedigreeFunction" className="block mb-2 text-sm font-medium text-gray-900">Diabetes Pedigree Function:</label>
        <input type="number" id="DiabetesPedigreeFunction" name="DiabetesPedigreeFunction" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
      </div>

      <div className="mb-3">
        <label htmlFor="Age" className="block mb-2 text-sm font-medium text-gray-900">Age:</label>
        <input type="number" id="Age" name="Age" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
      </div>
    </div>
    <div className="text-center">
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </div>
  </form>

  <div className="mt-6">
    {!server_msg.msg ? "" :
      <>
        <div className="text-center mb-4">
          <Alert security='success'>{server_msg.msg}</Alert>
        </div>
        <div className="text-center">
          <p className="text-lg text-gray-800">Disease: {server_msg.disease}</p>
        </div>
      </>
    }
  </div>
</div>

  )
}

export default DiabetesDiseasePrediction
