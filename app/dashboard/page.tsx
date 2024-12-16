"use client"
import React, { useState, useEffect, use } from 'react';
import Sidebar from '../components/Sidebar';
import { FaDotCircle } from 'react-icons/fa';
import axios from 'axios';
import Image from 'next/image';
import { getLeagueImage } from '../helpers/getLeagueImage';

const Dashboard = () => {
  const [predictions, setPredictions] = useState<any[]>([]);

  const fetchPredictions = async () => {
    const options = {
      method: "GET",
      url: "https://today-football-prediction.p.rapidapi.com/predictions/list",
      params: { page: "1" },
      headers: {
        "x-rapidapi-key": "4bf5a37284msh5664aae3be8efa8p16009cjsnad34520195d9",
        "x-rapidapi-host": "today-football-prediction.p.rapidapi.com",
      },
    };

    const vipOptions = {
      method: "GET",
      url: "https://today-football-prediction.p.rapidapi.com/predictions/featured",
      headers: {
        "x-rapidapi-key": "4bf5a37284msh5664aae3be8efa8p16009cjsnad34520195d9",
        "x-rapidapi-host": "today-football-prediction.p.rapidapi.com",
      },
    };

    const additionalOptions = {
      method: "GET",
      url: "https://football-prediction-api.p.rapidapi.com/api/v2/predictions?market=classic&iso_date=2018-12-01",
      headers: {
        "x-rapidapi-key": "4bf5a37284msh5664aae3be8efa8p16009cjsnad34520195d9",
        "x-rapidapi-host": "football-prediction-api.p.rapidapi.com",
      },
    };

    try {
      const [response, vipResponse, additionalResponse] = await Promise.all([
        axios.request(options),
        axios.request(vipOptions),
        axios.request(additionalOptions),
      ]);
      const allPredictions = [
        ...response?.data?.matches,
        ...vipResponse?.data?.matches,
        ...additionalResponse?.data?.data,
      ];
      console.log('additionalResponse', additionalResponse.data);
      setPredictions(allPredictions);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPredictions();
  }, []);

  console.log('predictions', predictions)
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex h-full overflow-y-auto">
        <Sidebar />
        <div className="flex-1 bg-white-50 p-6 flex flex-col">
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-6">
            {/* Move search bar to the left */}
            <input
              type="text"
              placeholder="Search"
              className="border border-slate-200 bg-slate-50 px-5 py-2 rounded-lg mr-4 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500" // Updated width and added modern styles
            />
            <div className="flex items-center space-x-4">
              <span className="text-sm font-semibold">Jack Byram</span>
              {/* <img
                src="/user-avatar.jpg"
                alt="User Avatar"
                className="h-10 w-10 rounded-full"
              /> */}
            </div>
          </div>

          {/* Dashboard Stats */}
          <div className="border-b border-slate-200 mb-5 w-full"></div> {/* Added thin slate line above Dashboard */}

          {/* Recent Applications and Interviews */}
          <div className="grid grid-cols-3 gap-6 flex-1 overflow-y-auto">
            {/* Recent Applications */}
            <div className="col-span-2 p-4 rounded-lg shadow-lg flex-1 max-100">
              <h3 className="text-xl font-semibold mb-4">All Predictions</h3>
              <ul className="max-h-41 overflow-y-auto">
                {predictions.map((prediction, index) => {
                  const leagueImage = getLeagueImage(prediction.league); // Assuming you have a function to get league images
                  return (
                    <li key={index} className="flex justify-between items-center p-6 border border-slate-200 bg-slate-50 rounded-lg mb-3">
                      <div className="flex items-center">
                        {leagueImage && (
                          <Image
                            src={leagueImage}
                            alt="League Icon"
                            width={25}
                            height={25}
                            className="mr-3"
                          />
                        )}
                        <div>
                          <span className="font-semibold">{prediction.home_team} vs {prediction.away_team}</span>
                          <p className="text-sm">{new Date(prediction.date_time).toLocaleString()}</p>
                        </div>
                      </div>
                      <span className="text-sm font-semibold">{prediction.prediction}</span>
                      <div className="mt-2">
                        {prediction.prediction_odd ? (
                          <p className="text-sm">Odds: {prediction.prediction_odd}</p>
                        ) : null}
                        <div className="flex items-center">
                          <span className="text-sm mr-2">Probability: {prediction.prediction_probability}%</span>
                          <div className="relative w-full h-2 bg-gray-200 rounded">
                            <div
                              className="absolute h-full bg-blue-500 rounded"
                              style={{ width: `${prediction.prediction_probability}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Upcoming Interviews */}
            <div className="bg-white p-4 rounded-lg shadow-lg bg-green-500 flex-1"> {/* Added flex-1 */}
              <h3 className="text-xl font-bold mb-4">Recent Analyses</h3>
              <ul className="max-h-81 overflow-y-auto"> {/* Updated max height for Upcoming Interviews */}
                {/* Updated list items to match Recent Applications style */}
                <li className="mb-3 border border-slate-200 bg-slate-50 p-4 rounded-lg flex justify-between items-center"> 
                  <div>
                    <span className="font-semibold">Review candidate applications</span>
                    <p className="text-sm">Today, 11:30 AM</p>
                  </div>
                </li>
                <li className="mb-3 border border-slate-200 bg-slate-50 p-4 rounded-lg flex justify-between items-center"> 
                  <div>
                    <span className="font-semibold">Interview with candidates</span>
                    <p className="text-sm">Today, 10:30 AM</p>
                  </div>
                </li>
                <li className="mb-3 border border-slate-200 bg-slate-50 p-4 rounded-lg flex justify-between items-center"> 
                  <div>
                    <span className="font-semibold">Meeting product designer</span>
                    <p className="text-sm">Today, 9:15 AM</p>
                  </div>
                </li>
                <li className="mb-3 border border-slate-200 bg-slate-50 p-4 rounded-lg flex justify-between items-center"> 
                  <div>
                    <span className="font-semibold">Final Interview with CEO</span>
                    <p className="text-sm">Tomorrow, 10:00 AM</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Soccer Predictions */}
        </div>
      </div>
      <footer className="bg-gray-800 text-white p-4">
        {/* Footer content here */}
      </footer>
    </div>
  );
};

export default Dashboard;
