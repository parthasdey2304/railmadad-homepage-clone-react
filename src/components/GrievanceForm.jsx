import React, { useState } from 'react';

function GrievanceForm() {
  const [journeyType, setJourneyType] = useState('');

  return (
    <div className="w-3/4 p-4">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">Grievance Detail</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
            Mobile No.
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mobile" type="text" placeholder="Enter mobile number" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="journeyType">
            Journey Type
          </label>
          <select 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="journeyType"
            onChange={(e) => setJourneyType(e.target.value)}
          >
            <option value="">Select Journey Type</option>
            <option value="PNR">PNR</option>
            <option value="UTS">UTS</option>
          </select>
        </div>

        {journeyType && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="journeyNumber">
              {journeyType} Number
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="journeyNumber" type="text" placeholder={`Enter ${journeyType} number`} />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="problemType">
            Problem Type
          </label>
          <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="problemType">
            <option value="">Select Problem Type</option>
            <option value="cleanliness">Cleanliness</option>
            <option value="food">Food Quality</option>
            <option value="staff">Staff Behavior</option>
            <option value="delay">Train Delay</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="problemSubtype">
            Problem Subtype
          </label>
          <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="problemSubtype">
            <option value="">Select Problem Subtype</option>
            <option value="toilet">Dirty Toilet</option>
            <option value="seat">Unclean Seat</option>
            <option value="ac">AC Not Working</option>
            <option value="overcharging">Overcharging</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="incidentDate">
            Date of Incident
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="incidentDate" type="date" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fileUpload">
            Upload Image/Video
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fileUpload" type="file" accept="image/*,video/*" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description of Grievance
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" rows="4" placeholder="Provide a detailed description of your grievance"></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-purple-800 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Submit
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default GrievanceForm;
