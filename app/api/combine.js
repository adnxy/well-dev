// pages/api/combined.js
import { NextApiRequest, NextApiResponse } from 'next';

// Function to fetch fixtures
export const fetchFixtures = async () => {
  console.log('fetchFixtures');
  const baseUrl = 'https://api.sportmonks.com';
  const version = 'v3';
  const sport = 'football';
  const startDate = '2024-12-07';
  const endDate = '2024-12-09';
  const response = await fetch(`${baseUrl}/${version}/${sport}/fixtures/between/${startDate}/${endDate}?page=3`, {
    headers: {
      'Authorization': 'A086ButGhmYtC9gFtALF6NWvUvOUMH91j3c06s4nFHhaXnslAl47adIcwXJ6'
    }
  });
  const data = await response.json();
  return data; // Assuming data contains an array of fixtures
};

// Function to fetch predictions
export const fetchPredictions = async (fixtureId) => {
  console.log('fixtureId', fixtureId);
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

// export default async function handler(req, res) {
//   try {
//     const fixtures = await fetchFixtures();
//     const predictionsData = await Promise.all(fixtures.data.map(async (fixture) => {
//       const predictionDetails = await fetchPredictions(fixture.id);
//       return { ...fixture, predictionDetails }; // Combine fixture and prediction details
//     }));
//     console.log('handler', predictionsData);

//     res.status(200).json(predictionsData); // Return combined data
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to fetch data' });
//   }
// }

export default function handler(req, res) {
    console.log('handler uslo', req);
    // Your logic here
    // res.status(200).json({ message: 'Hello from combine API' });
}
