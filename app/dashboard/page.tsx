"use client"
import React, { useState, useEffect, use } from 'react';
import Sidebar from '../components/Sidebar';
import { FaDotCircle } from 'react-icons/fa';
import axios from 'axios';
import Image from 'next/image';
import { getLeagueImage } from '../helpers/getLeagueImage';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Add interface for prediction type
interface Prediction {
  league: string;
  home_team: string;
  away_team: string;
  date_time?: string;
  start_date?: string;
  prediction?: string;
  prediction_probability?: number;
}

const Dashboard = () => {
  // Update state type
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [minDate, setMinDate] = useState<Date>(new Date());
  const [maxDate, setMaxDate] = useState<Date>(new Date());

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

    const currentDate = new Date();
    minDate.setDate(currentDate.getDate() - 1); // Set to the day before
    maxDate.setDate(currentDate.getDate() + 1); // Set to the day after

    const validDate = startDate && startDate <= maxDate ? startDate : currentDate;

    const additionalOptions = {
      method: "GET",
      url: `https://football-prediction-api.p.rapidapi.com/api/v2/predictions?market=classic&iso_date=${validDate.toISOString().split('T')[0]}`,
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
      
      // Combine predictions from both sources
      let allPredictions: Prediction[] = [
        ...response?.data?.matches,
        ...vipResponse?.data?.matches,
        ...(startDate ? additionalResponse?.data?.data : []),
      ];

      console.log('additionalResponse', additionalResponse.data);
      setPredictions(allPredictions);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Set startDate to current date after component mounts
    setStartDate(new Date());
  }, []);

  useEffect(() => {
    fetchPredictions();
  }, [startDate]);

  console.log('startDate', startDate?.toISOString().split('T')[0])

  console.log('predictions', predictions)
  const handleDateChange = (date: Date | null) => {
    if (date) {
      // Set the date to the start of the day to avoid timezone issues
      setStartDate(date);
    } else {
      setStartDate(null);
    }
    fetchPredictions();
  };
console.log('start date', startDate)
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex h-full overflow-y-auto">
        <Sidebar />
        <div className="flex-1 bg-white-50 p-6 flex flex-col ">
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-6">
            {/* Move search bar to the left */}

            <div className="flex items-center space-x-4">
              <span className="text-sm font-semibold">Welcome, User</span>
              {/* <img
                src="/user-avatar.jpg"
                alt="User Avatar"
                className="h-10 w-10 rounded-full"
              /> */}
            </div>
          </div>

          {/* Dashboard Stats */}
          <div className="border-b border-slate-200 mb-5 w-full "></div> {/* Added thin slate line above Dashboard */}

          {/* Recent Applications and Interviews */}
          <div className=" gap-6 flex-1 overflow-y-auto">
            {/* Date Picker */}
            <div className="mb-4">
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                className="border border-slate-200 bg-slate-50 px-5 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholderText="Select a date"
                minDate={minDate}
                maxDate={maxDate}
              />
              {startDate && <p className="mt-2">Selected Date: {startDate.toLocaleDateString()}</p>}
            </div>
            {/* Recent Applications */}
            <div className="col-span-2 p-4 rounded-lg shadow-lg flex-1 max-100 p-15">
              {/* <h3 className="text-xl font-semibold mb-4">All Predictions</h3> */}
              <ul className="max-h-41 overflow-y-auto">
                {predictions.map((prediction, index) => {
                  const leagueImage = getLeagueImage(prediction.league);
                  const matchDate = prediction.start_date 
                    ? new Date(prediction.start_date).toLocaleDateString('en-GB')
                    : new Date(prediction.date_time).toLocaleDateString('en-GB');
                  const predictionOutcome = prediction.prediction || 'X';
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
                          <p className="text-sm">{matchDate}</p>
                          <span className="text-sm">Prediction: {predictionOutcome}</span>
                        </div>
                      </div>
                      {prediction.prediction_probability ? (
                        <div className="mt-2">
                          <span className="text-sm mr-2">Probability: {prediction.prediction_probability}%</span>
                          <div className="relative w-full h-2 bg-gray-200 rounded">
                            <div
                              className="absolute h-full bg-blue-500 rounded"
                              style={{ width: `${prediction.prediction_probability}%` }}
                            />
                          </div>
                        </div>
                      ) : (
                        <button className="text-[#9E9E9E] underline">Analysis Details</button>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* <div className="bg-white p-4 rounded-lg shadow-lg bg-green-500 flex-1"> 
              <h3 className="text-xl font-bold mb-4">Recent Analyses</h3>
              <ul className="max-h-81 overflow-y-auto">                 <li className="mb-3 border border-slate-200 bg-slate-50 p-4 rounded-lg flex justify-between items-center"> 
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
            </div> */}
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
