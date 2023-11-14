'use client';

import TripsView from './TripsView';
import { useState } from 'react';

export interface Trip {
  name: string;
  info: string;
  date: string;
  group_info: string[];
}

const fakeTripList = [
  {
    name: 'Puerto Rico',
    info: "we're going to puerto rico!",
    date: '06/12/2024',
    group_info: ['bob', 'chelsea', 'ryan'],
  },
  {
    name: 'Grand Canyon Backpacking',
    info: "we're going backpacking in the grand Canyon!",
    date: '09/12/2024',
    group_info: ['Meg', 'Todd', 'Daniel'],
  },
];

export default function TripsWrapper() {
  const [trips, setTrips] = useState(fakeTripList);
  return <TripsView trips={trips} />;
}
