'use client';

import { useState } from 'react';
import TripsView from './TripsView';
import { fakeTripList } from './utils';

export interface Trip {
  id: Number;
  name: string;
  info: string;
  date: string;
  group_info: string[];
}

export default function TripsWrapper() {
  const [trips, setTrips] = useState(fakeTripList);

  return <TripsView trips={trips} />;
}
