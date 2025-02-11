import React, { useState } from 'react'
import { useHeartDiseaseModelPredictorMutation } from '../../services/userAuthApi';
import { Alert } from 'reactstrap';



const HeartDiaseasePrediction = () => {

  const [server_msg, setServerMsg] = useState({})


  const [heartDiseaseModelPredictor, { isLoading }] = useHeartDiseaseModelPredictorMutation();



  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      age: data.get('age'),
      sex: data.get('gender'),
      cp: data.get('cp_model'),
      trestbps: data.get('trestbps_model'),
      chol: data.get('chol_model'),
      fbs: data.get('fbs_model'),
      restecg: data.get('restecg_model'),
      thalach: data.get('thalach_model'),
      exang: data.get('exang_model'),
      oldpeak: data.get('oldpeak_model'),
      slope: data.get('slope_model'),
      ca: data.get('ca_model'),
      thal: data.get('thal_model'),
    }

    console.log("actualData is :-  ", actualData);

    const res = await heartDiseaseModelPredictor(actualData)
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
    <div style={{ backgroundColor: '#f0f8ff', backgroundImage: 'url("")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <form 
    className="max-w-sm mx-auto mt-3" onSubmit={handleSubmit}
  >
    
    <div className="mb-5 flex justify-between gap-4 ">
      <div className="w-1/2">
        <label for="age" className="block mb-2 text-sm font-medium text-gray-900">Age :</label>
        <input type="number" id="age" name='age' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
      </div>
      <div className="w-1/2">
        <label for="gender" className="block mb-2 text-sm font-medium text-gray-900">Sex :</label>
        <input type="text" id="gender" name='gender' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
      </div>
    </div>

    <div className="mb-5 flex justify-between gap-4">
      <div className="w-1/2">
        <label for="cp_model" className="block mb-2 text-sm font-medium text-gray-900">Chest Pain Type (cp) :</label>
        <input type="number" id="cp_model" name='cp_model' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
      </div>
      <div className="w-1/2">
        <label for="trestbps_model" className="block mb-2 text-sm font-medium text-gray-900">Resting BP (trestbps) :</label>
        <input type="number" id="trestbps_model" name='trestbps_model' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
      </div>
    </div>

    <div className="mb-5 flex justify-between gap-4">
      <div className="w-1/2">
        <label for="chol_model" className="block mb-2 text-sm font-medium text-gray-900">Serum Cholesterol (chol) :</label>
        <input type="number" id="chol_model" name='chol_model' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
      </div>
      <div className="w-1/2">
        <label for="fbs_model" className="block mb-2 text-sm font-medium text-gray-900">Fasting Blood Sugar (fbs) :</label>
        <input type="number" id="fbs_model" name='fbs_model' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
      </div>
    </div>

    <div className="mb-5 flex justify-between gap-4">
      <div className="w-1/2">
        <label for="restecg_model" className="block mb-2 text-sm font-medium text-gray-900">Resting ECG (restecg) :</label>
        <input type="number" id="restecg_model" name='restecg_model' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
      </div>
      <div className="w-1/2">
        <label for="thalach_model" className="block mb-2 text-sm font-medium text-gray-900">Max Heart Rate (thalach) :</label>
        <input type="number" id="thalach_model" name='thalach_model' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
      </div>
    </div>

    <div className="mb-5 flex justify-between gap-4">
      <div className="w-1/2">
        <label for="exang_model" className="block mb-2 text-sm font-medium text-gray-900">Exang :</label>
        <input type="number" id="exang_model" name='exang_model' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
      </div>
      <div className="w-1/2">
        <label for="oldpeak_model" className="block mb-2 text-sm font-medium text-gray-900">Oldpeak :</label>
        <input type="number" id="oldpeak_model" name='oldpeak_model' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
      </div>
    </div>

    <div className="mb-5 flex justify-between gap-4">
      <div className="w-1/2">
        <label for="slope_model" className="block mb-2 text-sm font-medium text-gray-900">Slope :</label>
        <input type="number" id="slope_model" name='slope_model' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
      </div>
      <div className="w-1/2">
        <label for="ca_model" className="block mb-2 text-sm font-medium text-gray-900">CA :</label>
        <input type="number" id="ca_model" name='ca_model' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
      </div>
    </div>

    <div className="mb-5">
      <label for="thal_model" className="block mb-2 text-sm font-medium text-gray-900">Thal :</label>
      <input type="number" id="thal_model" name='thal_model' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
    </div>
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-3">Submit</button>
  </form>

  {!server_msg.msg ? "" :
    <>
      <Alert security='success'>{server_msg.msg}</Alert>
      <div>
        Disease is {server_msg.disease}
      </div>
    </>
  }

</div>

  )
}

export default HeartDiaseasePrediction
