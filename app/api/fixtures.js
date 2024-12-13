   // pages/api/fixtures.js
   import { NextApiRequest, NextApiResponse } from 'next';
   import fetch from 'node-fetch'; // Make sure to install node-fetch if you haven't

   // New function to fetch predictions
   const fetchPredictions = async (fixtureId) => {
     const baseUrl = 'https://api.sportmonks.com';
     const version = 'v3';
     const sport = 'football';
     const response = await fetch(`${baseUrl}/${version}/${sport}/predictions/probabilities/fixtures/${fixtureId}`, {
       headers: {
         'Authorization': 'A086ButGhmYtC9gFtALF6NWvUvOUMH91j3c06s4nFHhaXnslAl47adIcwXJ6'
       }
     });
     const data = await response.json();
     return data; // Assuming data contains prediction details
   };

   export default async function handler(req, res) {
     const url = 'https://api.sportmonks.com/v3/football/fixtures/between/2024-12-07/2024-12-09?page=1';
     const apiKey = 'A086ButGhmYtC9gFtALF6NWvUvOUMH91j3c06s4nFHhaXnslAl47adIcwXJ6';

     try {
       const response = await fetch(url, {
         headers: {
           'Authorization': apiKey,
         },
       });

       if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
       }

       const data = await response.json();
       res.status(200).json(data);
     } catch (error) {
       console.error(error);
       res.status(500).json({ error: 'Failed to fetch data' });
     }
   }