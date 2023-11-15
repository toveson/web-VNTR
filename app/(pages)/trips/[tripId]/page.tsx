'use client';
import { useState } from 'react';
import { Stack } from '@mui/material';

import {
  Chat,
  TripsInfo,
  TripDetailHeader,
  ShoppingList,
  PackingList,
} from './index';

export default function TripDetailPage() {
  const [tab, setTab] = useState<string>('Info');

  return (
    <Stack style={{ flexGrow: 1, background: '#F8EBDE' }}>
      <TripDetailHeader tab={tab} setTab={setTab} />
      <TripsInfo />;
    </Stack>
  );
}
