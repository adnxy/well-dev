import React from 'react';
import Sidebar from '../components/Sidebar';
import { FaDotCircle } from 'react-icons/fa';
const Dashboard = () => {
  return (
    <div className="flex h-screen">
     
<Sidebar />
      {/* Main Content */}
      <div className="flex-1 bg-white-50 p-6 flex flex-col"> {/* Added flex-col to allow children to stack vertically */}
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
        <h1 className="text-2xl font-semibold mb-5">Dashboard</h1> {/* Moved title down */}

        <div className="grid grid-cols-4 gap-6 mb-6">
          <div className="bg-red-100 p-4 rounded-lg">
            <h2 className="text-lg font-bold">Submitted</h2>
            <p className="text-4xl font-semibold">24</p>
            
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h2 className="text-lg font-bold">Pending</h2>
            <p className="text-4xl font-semibold">10</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h2 className="text-lg font-bold">Interviews</h2>
            <p className="text-4xl font-semibold">24</p>
          </div>
          <div style={{ backgroundColor: '#1B204A', padding: '30px'}} className=" p-4 rounded-lg py-30">
            <h2 className="text-lg font-bold text-white">Recent Activity</h2>
            <h3 className="text-white">You have a new job offer</h3>
            <p className="text-white text-sm font-light">Kindly check the requirements and terms of work and make sure everything is right.</p>
            <div className="flex justify-end">
              <p className="text-orange-500 text-sm mt-4 cursor-pointer hover:underline">See all activity</p>
            </div>
          </div>
        </div>

        {/* Recent Applications and Interviews */}
        <div className="grid grid-cols-3 gap-6 flex-1"> {/* Added flex-1 to allow this section to grow */}
          {/* Recent Applications */}
          <div className="col-span-2 p-4 rounded-lg shadow-lg bg-blue-500 flex-1 max-100"> {/* Added flex-1 */}
            <h3 className="text-xl font-semibold mb-4">Recent Applications</h3>
            <ul className="max-h-41 overflow-y-auto"> {/* Updated max height for Recent Applications */}
              <li className="mb-3 border border-slate-200 bg-slate-50 p-4 rounded-lg flex justify-between items-center"> 
                <div className="flex items-center">
                  <div>
                    <span className="font-semibold">Outing schedule</span>
                    <p className="text-sm">5 minutes ago</p>
                    <p className="text-sm">Position: Developer | Company: XYZ Corp</p>
                  </div>
                </div>
                <span className="text-sm font-semibold">Application Submitted</span>
              </li>
              <li className="mb-3 border border-slate-200 bg-slate-50 p-4 rounded-lg flex justify-between items-center"> 
                <div className="flex items-center">
                  <div>
                    <span className="font-semibold">Meeting HR Department</span>
                    <p className="text-sm">Yesterday, 12:30 PM</p>
                    <p className="text-sm">Position: HR Specialist | Company: ABC Inc</p>
                  </div>
                </div>
                <span className="text-sm font-semibold">Application Submitted</span>
              </li>
              <li className="mb-3 border border-slate-200 bg-slate-50 p-4 rounded-lg flex justify-between items-center"> 
                <div>
                  <span className="font-semibold">Client Feedback Session</span>
                  <p className="text-sm">Today, 11:00 AM</p>
                  <p className="text-sm">Position: Feedback Coordinator</p> {/* Added position */}
                </div>
                <span className="text-sm font-semibold">Application Submitted</span>
              </li>
              <li className="mb-3 border border-slate-200 bg-slate-50 p-4 rounded-lg flex justify-between items-center"> 
                <div>
                  <span className="font-semibold">Team Standup</span>
                  <p className="text-sm">Today, 9:00 AM</p>
                  <p className="text-sm">Position: Team Member</p> {/* Added position */}
                </div>
                <span className="text-sm font-semibold">Application Submitted</span>
              </li>
              <li className="mb-3 border border-slate-200 bg-slate-50 p-4 rounded-lg flex justify-between items-center"> 
                <div>
                  <span className="font-semibold">Project Kickoff Meeting</span>
                  <p className="text-sm">Today, 2:00 PM</p>
                  <p className="text-sm">Position: Project Manager</p>
                </div>
                <span className="text-sm font-semibold">Application Submitted</span>
              </li>
              <li className="mb-3 border border-slate-200 bg-slate-50 p-4 rounded-lg flex justify-between items-center"> 
                <div>
                  <span className="font-semibold">Code Review Session</span>
                  <p className="text-sm">Today, 3:30 PM</p>
                  <p className="text-sm">Position: Software Engineer</p>
                </div>
                <span className="text-sm font-semibold">Application Submitted</span>
              </li>
            </ul>
          </div>

          {/* Upcoming Interviews */}
          <div className="bg-white p-4 rounded-lg shadow-lg bg-green-500 flex-1"> {/* Added flex-1 */}
            <h3 className="text-xl font-bold mb-4">Upcoming Interviews</h3>
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
        <div className="grid grid-cols-1 gap-6 mb-6"> {/* Updated to a single column layout */}
          <div className="bg-blue-100 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Soccer Predictions</h3>
            <ul className="max-h-60 overflow-y-auto"> {/* Set max height for scrolling */}
              <li className="mb-3 border border-slate-200 bg-slate-50 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <span className="font-semibold">Team A vs Team B</span>
                  <p className="text-sm">Prediction: Team A wins</p>
                </div>
              </li>
              <li className="mb-3 border border-slate-200 bg-slate-50 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <span className="font-semibold">Team C vs Team D</span>
                  <p className="text-sm">Prediction: Draw</p>
                </div>
              </li>
              <li className="mb-3 border border-slate-200 bg-slate-50 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <span className="font-semibold">Team E vs Team F</span>
                  <p className="text-sm">Prediction: Team F wins</p>
                </div>
              </li>
              {/* Add more predictions as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
